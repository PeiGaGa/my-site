<script setup>
import ex from '@/assets/images/ex.png'
import copy from '@/assets/images/copy.png'
</script>

<template>
  <section class="page">
    <div class="icon-row"><img class="header-icon" :src="copy" alt="copy" /></div>
    <div class="header-left">
      <h1 class="title">产品中心</h1>
      <div class="title-underline"></div>
    </div>
    <div class="divider dashed"></div>

    <!-- 顶部产品大图与轮播指示 -->
    <div class="hero">
      <img class="hero-img" :src="ex" alt="产品主图" />
      <div class="hero-indicators">
        <div class="dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="numbers">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
        </div>
      </div>
    </div>

    <!-- 规格与使用方式 -->
    <div class="specs">
      <div class="left">
        <div class="caption">整条鱼（带头去脏）</div>
        <ul class="kv">
          <li><b>原  产  地：</b><span>海洋养殖区</span></li>
          <li><b>贮存条件：</b><span>冷藏保鲜</span></li>
          <li><b>产品等级：</b><span>A级</span></li>
          <li><b>规      格：</b><span>5kg+</span></li>
        </ul>
      </div>
      <div class="right">
        <div class="caption">使用方法</div>
        <p>适用于蒸煮、清烤、刺身等多种烹饪方式；建议冷藏条件下加工食用。</p>
        <p>保质期：0-4℃条件下建议48小时内食用完毕。</p>
      </div>
    </div>

    <!-- 海上加工中心 -->
    <div class="processing">
      <div class="section-caption">海上加工中心</div>
      <div class="processing-intro">
        <div class="left">
          <img :src="ex" alt="加工中心图片" />
        </div>
        <div class="right">
          <h3 class="processing-title">全球首个三文鱼“海上加工中心”</h3>
          <div class="processing-line"></div>
          <div class="metrics">
            <div class="metric"><b>双加工线</b><span>持续稳定</span></div>
            <div class="metric"><b>100吨</b><span>单日最大产能</span></div>
            <div class="metric"><b>5吨</b><span>冷链仓储能力</span></div>
          </div>
          <p class="processing-text">加工流程贴近养殖海域减少运输损耗，确保每条鱼从养殖到成品更鲜更快。</p>
        </div>
      </div>
      <div class="corner-icon"><img class="header-icon" :src="copy" alt="copy" /></div>
    </div>

    <!-- 营销布局 -->
    <div class="marketing">
      <div class="section-caption">营销布局</div>
      <div class="map">
        <img :src="ex" alt="全球营销网络示意" />
      </div>
      <div class="sub-caption">加工与冷链物流体系</div>
      <p class="note">以加工提效、冷链保鲜为核心，构建覆盖国内外的加工与冷链网络，提升产品交付效率与品质稳定性。</p>
    </div>
  </section>
</template>

<style scoped>
.page { padding: 40px 0; }
.icon-row { display:flex; justify-content:flex-end; }
.header-left { display:flex; flex-direction:column; }
.title { font-size: 22px; margin: 0; }
.title-underline { width:40px; height:3px; background:#f5a34b; margin:6px 0 12px; }
.header-icon { width:24px; height:24px; object-fit:contain; opacity:.8; }

.divider { height: 0; border-top: 2px dashed #e5e6eb; margin: 12px 0 24px; }
.section-caption { color:#6b7785; font-size:14px; margin-bottom:12px; }

/* 顶部大图 */
.hero { position: relative; }
.hero-img { width:100%; height:auto; display:block; border-radius:2px; }
.hero-indicators { display:flex; align-items:center; justify-content:center; gap:16px; margin-top:8px; }
.hero-indicators .dots { display:flex; gap:6px; }
.dot { width:6px; height:6px; border-radius:50%; background:#cfd3dc; display:inline-block; }
.dot.active { background:#f5a34b; }
.hero-indicators .numbers { display:flex; gap:10px; color:#8a9099; font-size:12px; }

/* 规格与使用方式 */
.specs { display:grid; grid-template-columns: 1fr; gap:24px; margin-top:16px; }
.specs .left, .specs .right { border-top:2px dotted #dcdfe6; padding-top:14px; }
.specs .caption { font-weight:600; margin-bottom:8px; }
.kv { list-style:none; padding:0; margin:0; display:grid; gap:6px; color:#4a5568; }
.kv b { margin-right:6px; color:#333; font-weight:600; }
.specs .right p { margin:0 0 8px; line-height:1.8; color:#4a5568; }

/* 海上加工中心 */
.processing { margin-top:28px; position:relative; }
.processing-intro { display:grid; grid-template-columns: 1fr; gap:24px; align-items:start; }
.processing .left img { width:100%; height:auto; display:block; border-radius:2px; }
.processing .right { border-top:2px dotted #dcdfe6; padding-top:14px; }
.processing-title { margin:0; font-size:16px; }
.processing-line { height:3px; background:#f5a34b; width:40px; margin:10px 0 12px; }
.metrics { display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-bottom:8px; }
.metric { background:#f7f8fa; border:1px solid #eef0f4; border-radius:6px; padding:10px; text-align:center; }
.metric b { display:block; color:#1f2937; }
.metric span { color:#6b7280; font-size:12px; }
.processing-text { margin:0; line-height:1.8; color:#4a5568; }
.corner-icon { position:absolute; right:0; bottom:-12px; }

/* 营销布局 */
.marketing { margin-top:28px; }
.map img { width:100%; height:auto; display:block; border-radius:2px; }
.sub-caption { color:#6b7785; font-size:14px; margin:12px 0 6px; }
.note { margin:0; color:#4a5568; line-height:1.8; }

@media (min-width: 768px) {
  .specs { grid-template-columns: 1fr 1fr; gap:40px; }
  .processing-intro { grid-template-columns: 320px 1fr; gap:40px; }
}
</style>


