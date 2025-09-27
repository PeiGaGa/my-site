
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 根字体大小，1rem = 16px
      unitPrecision: 5, // rem 单位精度
      propList: [
        '*', // 转换所有属性
        '!border*', // 排除边框相关属性
        '!outline*', // 排除轮廓相关属性
        '!box-shadow', // 排除阴影
        '!text-shadow' // 排除文字阴影
      ],
      selectorBlackList: [
        '.ignore-rem', 
        '.no-rem', 
        /^\.van-/, // 排除 vant 组件
        /^\.el-/, // 排除 element-plus 组件
        /^\.ant-/ // 排除 ant-design 组件
      ],
      replace: true,
      mediaQuery: false, // 不转换媒体查询中的 px
      minPixelValue: 1, // 最小转换值
      exclude: [/node_modules/] // 排除 node_modules
    }
  }
}


