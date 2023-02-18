import { createUser, userLogin } from "@/includes/fetcher";
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
    const { status, msg } = await createUser(values);
    if (status === 200) {
      return { status, message: "注册成功" };
    } else {
      return { status, message: msg };
    }
  };

  // 用户登录
  const authenticate = async (values: ILogin) => {
    const { status, msg } = await userLogin(values);
    if (status === 200) {
      userLoggedIn.value = true;
      return { status, message: "登录成功" };
    } else if (status === 401) {
      return { status, message: "登录失败, 密码错误" };
    } else {
      return { status, message: msg };
    }
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
