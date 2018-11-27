import Vue from 'vue'
import VueRouter from 'vue-router'


import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',//去掉#
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        isShow: true // 标识显示底部导航
      }
    },
    {
      path: '/login',
      component: Login
    },

    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
