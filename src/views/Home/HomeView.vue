<template>
  <div class="select-none">
    <MainHeader />
    <div
      class="mobile:flex hidden items-center text-white bg-blue-500 w-full max-h-[500px] h-[30rem] bg-no-repeat justify-evenly"
    >
      <div class="h-32 flex flex-col justify-around">
        <div class="text-4xl">没事来聊天</div>
        <RouterLink
          class="text-2xl text-blue-500 bg-white rounded-full text-center py-[5px]"
          to="/login"
          >登录</RouterLink
        >
      </div>
      <div class="w-[600px] bg-blue-400 h-64"></div>
    </div>
    <div class="flex items-center justify-center flex-col mobile:flex-col lg:flex-row p-12">
      <TinyFeature
        v-for="feature in featuresOne"
        :icon="feature.icon"
        :title="feature.title"
        :desc="feature.desc"
        :user-style="{
          width: '400px',
          height: '300px'
        }"
      />
    </div>
    <div>
      <MainFeature />
      <MainFeature />
    </div>
    <div class="flex items-center justify-center flex-col mobile:flex-col lg:flex-row p-6 border-b">
      <TinyFeature
        v-for="feature in featuresTwo"
        :icon="feature.icon"
        :icon-class="'bg-no-repeat bg-[length:12%] w-full h-1/2 bg-[50%] bg-[image:var(--icon)]'"
        :title="feature.title"
        :desc="feature.desc"
        :user-style="{
          width: '400px',
          height: '200px'
        }"
      />
    </div>
    <div class="h-[400px] flex items-center justify-center flex-col">
      <div class="text-4xl mb-10">合作链接</div>
      <div
        class="w-full flex items-center justify-evenly flex-col mobile:flex-col lg:flex-row"
      ></div>
    </div>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import TinyFeature from './components/TinyFeature.vue'
import MainFeature from './components/MainFeature.vue'
import MainFooter from './components/MainFooter.vue'

const featuresOne: Array<{ icon: string; title: string; desc: string }> = []

const featuresTwo: Array<{ icon: string; title: string; desc: string }> = []
</script>
