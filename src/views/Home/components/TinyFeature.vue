<template>
  <div :class="{ 'w-[400px] h-[300px]': !userStyle }" :style="userStyle">
    <div
      :class="`${
        iconClass
          ? iconClass
          : 'bg-no-repeat bg-[length:20%] w-full h-1/2 bg-[50%] bg-[image:var(--icon)]'
      }`"
      :style="{ '--icon': `${icon}` }"
    ></div>
    <div class="text-center text-2xl">{{ title }}</div>
    <div class="text-center m-5 text-gray-500">{{ desc }}</div>
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

defineProps({
  iconClass: {
    type: String
  },
  userStyle: {
    type: Object as () => CSSProperties
  },
  icon: {
    type: String
  },
  title: {
    type: String
  },
  desc: {
    type: String
  }
})
</script>
