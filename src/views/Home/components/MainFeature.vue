<template>
  <div class="bg-slate-100 py-[150px] h-[800px]">
    <div class="text-center text-5xl">{{ title }}</div>
    <div class="text-center m-6 text-xl text-gray-600">{{ desc }}</div>
    <div
      class="bg-no-repeat bg-[length:50%] w-full h-full bg-[50%] bg-[image:var(--image-url)]"
      :style="{ '--image-url': `url(${image})` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String
  },
  desc: {
    type: String
  },
  image: {
    type: String
  }
})
</script>
