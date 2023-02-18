<template>
  <div class="px-16 h-2/3 absolute top-25 w-full flex items-center">
    <vee-form
      :validation-schema="loginSchema"
      @submit="login"
      class="w-4/5 h-full flex flex-col justify-around"
    >
      <!-- id -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">ID</label>
        <vee-field
          type="text"
          name="id"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入用户ID"
        />
        <ErrorMessage class="text-red-600" name="id" />
      </div>
      <!-- psw -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">密码</label>
        <vee-field
          type="password"
          name="psw"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入密码"
        />
        <ErrorMessage class="text-red-600" name="psw" />
      </div>
      <!-- captcha -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">邮箱</label>
        <vee-field
          type="email"
          name="captcha"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入邮箱"
        />
        <button
          class="text-white absolute top-9 right-0 text-right"
          @click.prevent="sendLogin"
        >
          发送验证码
        </button>
        <ErrorMessage class="text-red-600" name="captcha" />
      </div>
      <!-- wait_number -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">邮箱验证码</label>
        <vee-field
          type="text"
          name="wait_number"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入验证码"
        />
        <ErrorMessage class="text-red-600" name="wait_number" />
      </div>
      <button
        class="py-2 rounded-full text-white w-2/5"
        style="background: linear-gradient(#63d6c4, #4dc0b6)"
        type="submit"
        :disabled="login_in_submission"
      >
        登&nbsp;&nbsp;&nbsp;录
      </button>
    </vee-form>
  </div>
</template>
<script lang="ts">
import { useUserStore, type ILogin } from "@/stores/user";
import { mapActions } from "pinia";

export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        id: "required|min:1|max:100",
        psw: "required|min:1|max:100",
        captcha: "required|min:3|max:100|captcha",
        wait_number: "required|min:4|max:6",
      },
      login_in_submission: false,
    };
  },
  methods: {
    ...mapActions(useUserStore, ["authenticate"]),

    // 发送登录验证码
    sendLogin: () => {},

    // 登录
    async login(values: ILogin) {
      await this.authenticate(values).then((msg) => {
        if (msg!.status === 200) {
          this.$router.push({ name: "chat" });
          this.login_in_submission = true;
        } else {
          alert(msg.message);
        }
      });
    },
  },
};
</script>
