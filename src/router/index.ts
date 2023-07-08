import { createRouter, createWebHistory } from 'vue-router'
import { isLogin } from '@/utils/auth.util'
import { useUserStore } from '@/stores/user.store'
import HomeView from '@/views/Home/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: '茵蒂克丝' },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      meta: { title: '洛津' },
      component: () => import('@/views/Validate/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '缕撅斯特' },
      component: () => import('@/views/Validate/RegisterView.vue')
    }
  ]
})

/**
 * 路由白名单
 */
const routerWhiteList = ['/', '/login', '/register']

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title ? String(to.meta.title) : '- v ^'
  if (isLogin()) {
    const { updateUserInfo } = useUserStore()
    await updateUserInfo()
    next()
  } else {
    if (routerWhiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
