<template>
  <div class="px-16">
    <vee-form :validation-schema="registerSchema">
      <!-- name -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">用户名</label>
        <vee-field
          type="text"
          name="name"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入用户名"
        />
      </div>
      <!-- psw -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">密码</label>
        <input
          type="password"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入密码"
        />
      </div>
      <!-- captcha -->
      <div class="mb-3">
        <label class="inline-block mb-2 text-white">邮箱</label>
        <input
          type="email"
          class="block w-full py-1.5 text-white transition duration-500 border-b bg-transparent outline-none"
          placeholder="输入邮箱"
        />
        <button
          class="text-white absolute top-1/2 left-2/3"
          @click.prevent="sendRegister"
        >
          发送验证码
        </button>
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
      </div>
    </vee-form>
  </div>
</template>
<script lang="ts">
export default {
  name: "RegisterForm",
  data() {
    return {
      registerSchema: {
        id: "required|min:1|max:100",
        psw: "required|min:1|max:100",
        captcha: "required|min:3|max:100|captcha",
        wait_number: "required|min:4|max:6",
      },
    };
  },
  methods: {
    sendRegister: () => {},
  },
};
</script>
