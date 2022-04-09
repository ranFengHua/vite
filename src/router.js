import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    redirect: '/index'
  }, {
    path: '/index',
    name: 'index',
    component: () => import('./views/home.vue'),
    meta: {
      title: '首页'
    }
  }, {
    path: '/login',
    name: 'login',
    component: () => import('./views/login.vue'),
    meta: {
      title: '登录'
    }
  }, {
    path: '/result',
    name: 'result',
    component: () => import('./views/result.vue'),
    meta: {
      title: '授信结果界'
    }
  }, {
    path: '/datum',
    name: 'datum',
    component: () => import('./views/datum.vue'),
    meta: {
      title: '授信界'
    }
  }],
  scrollBehavior(to, from, savedPosition) {
    // 滚动到顶部
    window.scrollTo(0, 0)
    return { x: 0, y: 0 }
  }
})
export default router
