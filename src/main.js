import Vue from 'vue'
import App from './App.vue'
// 默认导入./router的index.js
import router from './router'

// 导入并安装Vant组件库use()安装插件
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'

// rem适配
import "amfe-flexible"

// // dayjs插件
import dayjs from 'dayjs'
// 导入计算相对时间的插件
import relativeTime from "dayjs/plugin/relativeTime"
// 导入中文语言包
import zh from "dayjs/locale/zh-cn"

Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

dayjs.extend(relativeTime)
dayjs.locale(zh)
Vue.filter("dateFormat", (dt) => {
  return dayjs().to(dt)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
