import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '線上相簿',
      // 不用登入就可以看這頁
      login: false
    }
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Reg.vue'),
    meta: {
      title: '線上相簿 | 註冊',
      login: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      title: '線上相簿 | 登入',
      login: false
    }
  },
  {
    path: '/album',
    name: 'Album',
    component: () => import(/* webpackChunkName: "album" */ '../views/Album.vue'),
    meta: {
      // 登入才能看
      login: true
    }
  }
]

const router = new VueRouter({
  routes
})

// 進每一頁之前，登入判斷
router.beforeEach((to, from, next) => {
  if (to.meta.login && !store.state.user) {
    next('/login')
  } else {
    next()
  }
})

// 進到每一頁之後，檢查去的那頁是否為 Album，修改網站標題
router.afterEach((to, from) => {
  let title = ''
  if (to.name === 'Album') {
    title = store.state.user.name + '的相簿'
  } else {
    title = to.meta.title
  }
  document.title = title
})

export default router
