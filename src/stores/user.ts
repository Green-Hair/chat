import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  // 用户登录状态
  const userLoggedIn = ref<boolean>(false);

  // 用户注册
  const register = async () => {};

  // 用户登录
  const authenticate = async () => {
    userLoggedIn.value = true;
  };

  // 用户登出
  const signOut = async () => {
    userLoggedIn.value = false;
  };

  return {
    userLoggedIn,
    register,
    authenticate,
    signOut,
  };
});
