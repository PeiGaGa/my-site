
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 750, // 设计稿宽度（已改为 750）
      unitPrecision: 6,
      // 全局规则：转换绝大多数属性，但保留边框与描边为 px
      // 参考插件文档：'!' 前缀可排除属性匹配
      propList: ['*', '!border*', '!outline*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignore-vw', '.no-vw', /^\.van-/, /^\.el-/],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [/node_modules/],
      landscape: false
    }
  }
}


