import axios from 'axios'

// -------- Config --------
const isDev = import.meta.env.DEV
const BASE_URL = import.meta.env.VITE_API_BASE || '/api'
const TIMEOUT = Number(import.meta.env.VITE_API_TIMEOUT || 10000)
const MAX_RETRY = Number(import.meta.env.VITE_API_RETRY || 1)

// -------- Token helpers (可替换为更安全的实现) --------
const TOKEN_KEY = 'AUTH_TOKEN'
export function setAuthToken(token) { localStorage.setItem(TOKEN_KEY, token || '') }
export function clearAuthToken() { localStorage.removeItem(TOKEN_KEY) }
export function getAuthToken() { return localStorage.getItem(TOKEN_KEY) || '' }

// -------- Duplicate request control --------
const pendingMap = new Map()
function getPendingKey(config) {
  const { method, url, params, data } = config
  return [method, url, JSON.stringify(params || {}), typeof data === 'string' ? data : JSON.stringify(data || {})].join('&')
}
function addPending(config) {
  const key = getPendingKey(config)
  if (pendingMap.has(key)) {
    const controller = pendingMap.get(key)
    controller.abort()
    pendingMap.delete(key)
  }
  const controller = new AbortController()
  config.signal = controller.signal
  pendingMap.set(key, controller)
}
function removePending(config) {
  const key = getPendingKey(config)
  if (pendingMap.has(key)) pendingMap.delete(key)
}

// -------- Axios instance --------
const instance = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT, withCredentials: false })

// Request interceptor
instance.interceptors.request.use((config) => {
  // Attach token
  const token = getAuthToken()
  if (token) config.headers = { ...(config.headers || {}), Authorization: `Bearer ${token}` }

  // Add request id for tracing
  config.headers = { ...(config.headers || {}), 'X-Request-Id': crypto.randomUUID ? crypto.randomUUID() : Date.now().toString() }

  // Control duplicate
  addPending(config)

  if (isDev) console.debug('[HTTP REQUEST]', config.method?.toUpperCase(), config.url, config.params || {}, config.data || {})
  return config
})

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    removePending(response.config)

    // File download
    const contentType = response.headers?.['content-type'] || ''
    if (contentType.includes('application/octet-stream') || contentType.includes('application/vnd')) {
      return response
    }

    const resData = response.data
    // 统一格式：{ code, data, message } 或直出数据
    if (resData && typeof resData === 'object' && 'code' in resData) {
      const { code, data, message } = resData
      if (code === 0 || code === 200) return data
      const err = new Error(message || 'Request Error')
      err.code = code
      throw err
    }
    return resData
  },
  async (error) => {
    const config = error.config || {}
    removePending(config)

    const status = error?.response?.status
    // Token 失效处理（可改为刷新 token）
    if (status === 401) {
      clearAuthToken()
      // 可在此触发跳转登录
    }

    // 网络/超时重试
    const shouldRetry = !status && (error.code === 'ECONNABORTED' || error.message?.includes('timeout') || error.message === 'Network Error')
    config._retryCount = config._retryCount || 0
    if (shouldRetry && config._retryCount < MAX_RETRY) {
      config._retryCount += 1
      const backoff = 300 * config._retryCount
      await new Promise((r) => setTimeout(r, backoff))
      return instance(config)
    }

    const msg = error?.response?.data?.message || error.message || 'Request Failed'
    if (isDev) console.error('[HTTP ERROR]', status, msg)
    return Promise.reject(error)
  }
)

// -------- Helper methods --------
function request(method, url, options = {}) {
  return instance({ method, url, ...options })
}
export const http = {
  instance,
  get: (url, params, config) => request('get', url, { params, ...(config || {}) }),
  post: (url, data, config) => request('post', url, { data, ...(config || {}) }),
  put: (url, data, config) => request('put', url, { data, ...(config || {}) }),
  patch: (url, data, config) => request('patch', url, { data, ...(config || {}) }),
  delete: (url, params, config) => request('delete', url, { params, ...(config || {}) })
}

export default instance


