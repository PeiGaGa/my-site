<template>
  <section class="vp-demo container">
    <h2 class="title">px → vw 转换演示</h2>
    <div class="grid">
      <div class="card convert">
        <h3>已转换（默认）</h3>
        <p>本卡片所有 px 将被转换为 vw，随视口等比缩放。</p>
        <button class="btn">按钮 16px</button>
      </div>
      <div class="card ignore-vw">
        <h3>忽略转换（.ignore-vw）</h3>
        <p>本卡片因类名在黑名单中，保持原始 px，不会随视口缩放。</p>
        <button class="btn">按钮 16px</button>
      </div>
    </div>
  </section>
  
</template>

<style scoped>
.vp-demo { padding: 24px 0; }
.title { margin-bottom: 16px; font-weight: 600; }
.grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.card { border: 1px solid #e5e5e5; border-radius: 8px; padding: 16px; }
.btn { margin-top: 12px; padding: 8px 16px; border: 1px solid #ccc; border-radius: 6px; background: #fff; }

@media (min-width: 1024px) {
  .grid { grid-template-columns: 1fr 1fr; }
}
</style>


