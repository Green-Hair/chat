<template>
  <header id="header" class="bg-white border-b border-gray-200">
    <nav class="container mx-auto flex items-center py-5 px-4 justify-between">
      <router-link
        class="font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >立交桥</router-link
      >
      <div class="flex items-center">
        <ul class="flex flex-row mt-1">
          <li v-if="!userStore.userLoggedIn">
            <a class="px-2" href="#" @click.prevent="toggleAuthModal">登录</a>
          </li>
          <template v-else>
            <li>
              <router-link class="px-2" :to="{ name: 'chat' }"
                >进入聊天</router-link
              >
            </li>
            <li>
              <a class="px-2" href="#" @click.prevent="signOut">退出登录</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { mapStores } from "pinia";
import { useUserStore } from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
    // 登录注册
    toggleAuthModal() {
      this.$router.push({ name: "auth" });
    },
    // 登出
    signOut() {
      this.userStore.signOut();

      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
  },
};
</script>
