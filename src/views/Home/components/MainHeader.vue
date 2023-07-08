<template>
  <nav
    class="fixed w-full text-lg transition-all duration-500 px-16 flex justify-between p-0 m-0"
    :class="{ 'bg-white': scrolled, 'bg-transparent': !scrolled }"
  >
    <div class="leading-none">
      <RouterLink
        class="transition-all flex items-center py-3 px-4 duration-500 hover:bg-nav-item-hover"
        :class="{
          'mobile:text-white text-blue-500': !scrolled,
          'text-blue-500 border-blue-500': scrolled,
          'border-b-4': $route.path == '/'
        }"
        to="/"
      >
        首页
      </RouterLink>
    </div>
    <div class="leading-none w-36 flex justify-around">
      <RouterLink
        class="transition-all flex items-center px-4 duration-500 hover:bg-nav-item-hover"
        :class="{ 'mobile:text-white': !scrolled, 'text-nav-item-text': scrolled }"
        to="/login"
      >
        登录
      </RouterLink>
      <RouterLink
        class="transition-all flex items-center px-4 duration-500 hover:bg-nav-item-hover"
        :class="{ 'mobile:text-white': !scrolled, 'text-nav-item-text': scrolled }"
        to="/register"
      >
        注册
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped></style>
