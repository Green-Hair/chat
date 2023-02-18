<template>
  <div class="px-16 h-2/3 absolute top-25 w-full flex items-center">
    <vee-form
      :validation-schema="registerSchema"
      @submit="register"
      class="w-4/5 h-full flex flex-col justify-around"
    >
      <!-- name -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">用户名</label>
        <vee-field
          type="text"
          name="name"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入用户名"
        />
        <ErrorMessage class="text-red-600" name="name" />
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
          @click.prevent="sendRegister"
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
      <div>
        <button
          class="py-2 rounded-full text-white w-2/5"
          style="background: linear-gradient(#63d6c4, #4dc0b6)"
          type="submit"
          :disabled="reg_in_submission"
        >
          注&nbsp;&nbsp;&nbsp;册
        </button>
        <span
          class="ml-4 border-b tabswitch cursor-pointer"
          @click="$emit('change-tab')"
          >已有帐号</span
        >
      </div>
    </vee-form>
  </div>
</template>
<script lang="ts">
import { useUserStore, type IRegister } from "@/stores/user";
import { mapActions } from "pinia";

export default {
  name: "RegisterForm",
  data() {
    return {
      registerSchema: {
        name: "required|min:1|max:100",
        psw: "required|min:8|max:100",
        captcha: "required|min:3|max:100|captcha",
        wait_number: "required|min:4|max:6",
      },
      reg_in_submission: false,
    };
  },
  methods: {
    ...mapActions(useUserStore, {
      createUser: "register",
    }),

    // 发送注册验证码
    sendRegister: () => {},

    // 注册
    async register(values: IRegister) {
      await this.createUser(values).then((msg) => {
        if (msg!.status === 200) {
          this.reg_in_submission = true;
          // 注册成功后刷新页面
          window.location.reload();
        } else {
          alert(msg.message);
        }
      });
    },
  },
};
</script>
<style scoped>
.tabswitch {
  color: #727b87;
  border-color: #1f6d6c;
  padding-bottom: 3px;
}
.tabswitch:hover {
  border-color: #00c9a8;
}
</style>
