<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'

const mapElCompany1 = ref(null)
const mapElCompany2 = ref(null)

let mapInstanceCompany1 = null
let mapInstanceCompany2 = null

function initMap(AMap, container, address, city, fallbackLngLat) {
  if (!container) return
  const map = new AMap.Map(container, {
    zoom: 14,
    viewMode: '2D',
    center: fallbackLngLat || undefined,
  })

  // 地理编码定位；失败则使用兜底坐标
  AMap.plugin('AMap.Geocoder', function () {
    const geocoder = new AMap.Geocoder({ city: city || '全国' })
    geocoder.getLocation(address, function (status, result) {
      if (status === 'complete' && result.geocodes && result.geocodes.length) {
        const location = result.geocodes[0].location
        map.setCenter(location)
        map.setZoom(16)
        new AMap.Marker({ position: location, map })
      } else {
        console.warn('[AMap] Geocode failed for address:', address, result)
        if (fallbackLngLat) {
          map.setCenter(fallbackLngLat)
          map.setZoom(15)
          new AMap.Marker({ position: fallbackLngLat, map })
        }
      }
    })
  })

  return map
}

onMounted(async () => {
  try {
    if (typeof window === 'undefined') return
    
    // 动态导入 AMapLoader 以避免 SSR 问题
    const { default: AMapLoader } = await import('@amap/amap-jsapi-loader')
    
    // 可选：若开启安全校验，请填写安全密钥
    window._AMapSecurityConfig = { securityJsCode: '' }
    const AMap = await AMapLoader.load({
      key: '',
      version: '2.0',
      plugins: ['AMap.Geocoder', 'AMap.Scale'],
    })

    // 公司1
    mapInstanceCompany1 = initMap(
      AMap,
      mapElCompany1.value,
      '江苏省连云港市赣榆区白中路泉岗路303号1202室',
      '连云港市',
      // fallback lnglat for Ganyu District Government (approximate), replace if you have precise coords
      [119.176746, 34.839665]
    )

    // 公司2
    mapInstanceCompany2 = initMap(
      AMap,
      mapElCompany2.value,
      '深圳市盐田区盐田街道田东社区深盐路2002号 大百汇新城东六巷A栋602',
      '深圳市',
      // fallback lnglat near Dayawan/Shatoujiao area (approximate), replace if you have precise coords
      [114.24842, 22.567931]
    )
  } catch (e) {
    console.error(e)
  }
})

onUnmounted(() => {
  try { mapInstanceCompany1 && mapInstanceCompany1.destroy && mapInstanceCompany1.destroy() } catch {}
  try { mapInstanceCompany2 && mapInstanceCompany2.destroy && mapInstanceCompany2.destroy() } catch {}
  mapInstanceCompany1 = null
  mapInstanceCompany2 = null
})
</script>

<template>
  <!-- 顶部大图标题 -->
  <section class="hero" role="img" aria-label="Contact hero">
    <img class="hero-img" :src="ex" alt="海港风景图" />
    <div class="hero-mask"></div>
    <h1 class="hero-title">CONTACT US</h1>
  </section>

  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">联系我们</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider dashed"></div>

    <!-- 公司1 卡片 -->
    <div class="contact-card">
      <div class="info">
        <h3>江苏连深海洋科技有限公司</h3>
        <div class="underline"></div>
        <p>地址：江苏省连云港市赣榆区白中路泉岗路303号1202室</p>
        <p>批发采购、渠道合作</p>
        <p>联系人/手机：13266669799</p>
        <p class="sub">高校/科研机构合作</p>
        <p>联系人/罗严：18208985972</p>
      </div>
      <div class="map" ref="mapElCompany1"></div>
    </div>

    <!-- 公司2 卡片 -->
    <div class="contact-card">
      <div class="info">
        <h3>广东连深海洋食品有限公司</h3>
        <div class="underline"></div>
        <p>地址：深圳市盐田区盐田街道田东社区深盐路2002号</p>
        <p>大百汇新城东六巷A栋602</p>
        <p>批发采购、渠道合作</p>
        <p>联系人/手机：13266669799</p>
        <p class="sub">高校/科研机构合作</p>
        <p>联系人/罗严：18208985972</p>
      </div>
      <div class="map" ref="mapElCompany2"></div>
    </div>

    <!-- 底部按钮 -->
    <div class="actions">
      <button class="btn">人才招聘</button>
      <button class="btn">联系方式</button>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; width:100vw; margin-left: calc(50% - 50vw); height: 52vh; min-height: 320px; max-height: 640px; overflow:hidden; }
.hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.hero-mask { position:absolute; inset:0; background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.45) 100%); }
.hero-title { position:absolute; left:50%; top:55%; transform: translate(-50%, -50%); margin:0; color:#fff; font-weight:800; letter-spacing:2px; font-size: 40px; text-align:center; white-space:nowrap; }

.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }
.divider { height: 0; border-top: 2px dashed #e5e6eb; margin: 12px 0 24px; }

.contact-card { display:grid; grid-template-columns: 1fr; gap:0; border-radius: 4px; overflow:hidden; margin-bottom:24px; background:#fff; align-items:stretch; }
.contact-card .info { background:#2f4a86; color:#fff; padding:20px; }
.contact-card .info h3 { margin:0 0 10px; font-size:18px; font-weight:600; }
.contact-card .info .underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 14px; }
.contact-card .info p { margin:6px 0; line-height:1.6; }
.contact-card .info p.sub { margin-top:12px; font-weight:600; }
.contact-card .map { position:relative; height:200px; }

.actions { display:grid; grid-template-columns: 1fr; gap:16px; margin-top: 12px; }
.btn { background:#2f4a86; color:#fff; border:none; padding:14px 16px; border-radius:4px; font-size:16px; cursor:pointer; }
.btn:hover { opacity:.92; }

@media (min-width: 768px) {
  .hero-title { font-size: 80px; top:60%; }
  .contact-card { grid-template-columns: 360px 1fr; }
    .contact-card .map { height:auto; min-height: 280px; }
  .actions { grid-template-columns: 1fr 1fr; }
}

@media (min-width: 1200px) {
  .hero { height: 62vh; }
  .hero-title { font-size: 112px; }
}

/* 让导航覆盖在大图之上（仅桌面，使用 header 变量高度） */
@media (min-width: 1025px) {
  .hero { margin-top: calc(var(--pc-header-height) * -1); }
}
</style>


