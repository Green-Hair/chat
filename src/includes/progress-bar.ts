import NProgress from "nprogress";
import type { Router } from "vue-router";

export default (router: Router) => {
  // 前置守卫开始动画
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  // 后置守卫结束动画
  router.afterEach(() => {
    NProgress.done();
  });
};
