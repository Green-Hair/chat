<template>
  <div class="px-16">
    <vee-form :validation-schema="loginSchema">
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
          class="text-white absolute top-1/2 left-2/3"
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
    </vee-form>
  </div>
</template>
<script lang="ts">
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
    };
  },
  methods: {
    sendLogin: () => {},
  },
};
</script>
