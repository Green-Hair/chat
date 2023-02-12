import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "@/stores/user";

const routes = [
  /*  
    路由懒加载
  */
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/views/ChatView.vue"),
    meta: {
      // 该页面要求用户登录
      requiresAuth: true,
    },
  },
  {
    // 捕获不存在的路由后返回主页
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // 若不要求登录验证则直接进入页面
  if (!to.meta.requiresAuth) {
    next();
    return;
  }

  /* 
    进入登录验证阶段 
    获取用户登录状态, 已登录直接进入页面, 未登录则跳转home页
  */
  const store = useUserStore();
  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
