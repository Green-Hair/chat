<template>
  <div class="flex justify-center items-center h-screen">
    <!-- 背景 -->
    <div class="fixed inset-0 transition-opacity">
      <div
        class="absolute inset-0"
        style="background: linear-gradient(#ed8792, #a84660)"
      ></div>
    </div>

    <div class="shadow-2xl w-3/4 h-5/6 auth">
      <div class="flex h-full auth">
        <!-- 特性轮播组件 -->
        <FeatureCard class="w-1/2 h-full rounded-tl-xl rounded-bl-xl" />
        <!-- 登录注册组件 -->
        <div class="w-1/2 rounded-tr-xl rounded-br-xl authb">
          <div class="text-white my-5 mr-5 text-right">
            <button
              @click.prevent="tab = 'login'"
              class="px-5 py-1 rounded-l-full"
              :class="tab == 'login' ? 'bauth' : 'bauthf'"
            >
              登录
            </button>
            <button
              @click.prevent="tab = 'register'"
              class="px-5 py-1 rounded-r-full"
              :class="tab == 'register' ? 'bauth' : 'bauthf'"
            >
              注册
            </button>
          </div>
          <div class="text-white my-8 flex items-baseline px-16">
            <div
              class="text-2xl"
              :class="tab == 'login' ? 'border-b sauth' : 'border-none  tauth'"
            >
              Sign In
            </div>
            <div class="mx-4 tauth">Or</div>
            <div
              class="text-2xl"
              :class="
                tab == 'register' ? 'border-b sauth' : 'border-none tauth'
              "
            >
              Sign Up
            </div>
          </div>
          <LoginForm v-if="tab === 'login'" />
          <RegisterForm @change-tab="tab = 'login'" v-else />
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
<style scoped>
.authb {
  background: linear-gradient(#374a61, #212e41);
}
.sauth {
  border-bottom-color: #00c9a8;
  padding-bottom: 5px;
}
.tauth {
  color: #677685;
}
.bauth {
  background: linear-gradient(#53d9c5, #38c1b6);
  color: white;
}
.bauthf {
  background: linear-gradient(#495c6f, #495b6f);
  color: #919da8;
}
</style>
