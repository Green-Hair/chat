<template>
  <div class="fixed z-10 inset-0" id="modal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 h-full"
    >
      <!-- 背景 -->
      <div class="fixed inset-0 transition-opacity">
        <div
          class="absolute inset-0"
          style="background: linear-gradient(#ed8792, #a84660)"
        ></div>
      </div>

      <!-- 零宽空格 -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >

      <div
        class="inline-block align-bottom text-left shadow-2xl transform transition-all sm:align-middle w-3/4 h-5/6"
      >
        <div class="flex h-full auth">
          <FeatureCard class="w-1/2 h-full rounded-tl-xl rounded-bl-xl" />
          <LoginForm
            class="w-1/2 rounded-tr-xl rounded-br-xl"
            v-if="tab === 'login'"
          />
          <RegisterForm class="w-1/2 rounded-tr-xl rounded-br-xl" v-else />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import FeatureCard from "@/components/FeatrueCard.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegisterForm from "@/components/RegisterForm.vue";
export default {
  name: "AuthView",
  components: {
    FeatureCard,
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
