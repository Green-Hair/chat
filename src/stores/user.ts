import { defineStore } from "pinia";
import { ref } from "vue";

interface IRegister {
  name: string;
  psw: string;
  captcha: string;
  wait_number: string;
}

interface ILogin extends IRegister {
  id: string;
}

export const useUserStore = defineStore("user", () => {
  // 用户登录状态
  const userLoggedIn = ref<boolean>(false);

  // 用户注册
  const register = async (values: IRegister) => {
    console.log(values);

    console.log("注册");
  };

  // 用户登录
  const authenticate = async (values: ILogin) => {
    console.log(values);

    console.log("登录");
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

export type { IRegister, ILogin };
