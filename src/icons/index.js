import SvgIcon from '@/components/SvgIcon/index.vue'

// 1. 导入所有svg图标（webpack的方法 require.context）
// 传入三个参数。要搜索的目录、是否还要搜索子目录、匹配文件的正则表达式
// 返回函数
const svgRequire = require.context('./svg', false, /\.svg$/)
// 此时返回了 一个函数 ，可以接收一个request的参数，用于require的导入
// 该函数提供三个属性。可以通过svgRequire.keys()获取所有图标
// 遍历图标
svgRequire.keys().forEach((item) => svgRequire(item))

// 2. 完成svg-icon的全局注册
export default app => {
  app.component('svg-icon', SvgIcon)
}
