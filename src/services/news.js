import http, { http as helper } from './http'

export function fetchNewsList(params = {}) {
  return helper.get('/news', params)
}

export function fetchNewsDetail(id) {
  return http.get(`/news/${id}`)
}

export function createNews(data) {
  return http.post('/news', data)
}

export function updateNews(id, data) {
  return http.put(`/news/${id}`, data)
}

export function deleteNews(id) {
  return http.delete(`/news/${id}`)
}


