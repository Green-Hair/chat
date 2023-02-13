<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!-- 背景 -->
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <!-- 零宽空格 -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div class="py-4 text-left px-6">
          <LoginForm v-if="tab === 'login'" />
          <RegisterForm v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "AuthView",
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      tab: "login",
    };
  },
};
</script>
