import Vue from 'vue'
import VueRouter from 'vue-router'
// 某个组件是通过路由切换放在view里面
import Home from '../views/Home/Home.vue'
import User from '../views/User/User.vue'
import Main from '../views/Main/Main.vue'
Vue.use(VueRouter)

// 路由规则数组
const routes = [
  // 定义首页路由规则
  { 
    path: '/',
    component: Main,
    name: 'main',
    redirect: 'home',
    children: [
      { path: '/home', component: Home, name: 'home' },
      { path: '/user', component: User, name: 'user' }
    ]
  }
]
// 创建路由对象
const router = new VueRouter({
  routes
})

export default router
