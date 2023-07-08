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
      <MainFeature
        class="border-b"
        :title="'在线文档'"
        :desc="'在线Word/Excel，多端多人随时编辑'"
        :image="'https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/zaixian.png'"
      />
      <MainFeature
        class="border-b"
        :desc="'手机电脑消息同步，历史消息随时查看'"
        :image="'https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/xiaoxi.png'"
      />
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
      <div class="w-full flex items-center justify-evenly flex-col mobile:flex-col lg:flex-row">
        <a class="m-2" href="#">华为</a>
        <a class="m-2" href="#">魅族</a>
        <a class="m-2" href="#">小米</a>
        <a class="m-2" href="#">OPPO</a>
        <a class="m-2" href="#">VIVO</a>
        <a class="m-2" href="#">一加</a>
      </div>
    </div>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from './components/MainHeader.vue'
import TinyFeature from './components/TinyFeature.vue'
import MainFeature from './components/MainFeature.vue'
import MainFooter from './components/MainFooter.vue'

const featuresOne = [
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/function.png)',
    title: '熟悉的QQ习惯',
    desc: '使用QQ帐号登录，QQ好友和消息无缝同步。'
  },
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/function2.png)',
    title: '在线编辑文档',
    desc: '支持在线编辑Word和Excel，文件操作更便捷高效。'
  },
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/function3.png)',
    title: '丰富的通讯能力',
    desc: '消息多端同步、音视频通话等，让沟通更顺畅。'
  }
]

const featuresTwo = [
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/qun2x.png)',
    title: '办公群',
    desc: '支持通讯录模式，群文件统一管理，方便团队群内协作。'
  },
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/phone2x.png)',
    title: '电话',
    desc: '好友、多人之间可进行实时清晰的语音及视频通话。'
  },
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/collection2x.png)',
    title: '收藏',
    desc: '可将重要的聊天内容添加至收藏，支持二次编辑。'
  },
  {
    icon: 'url(https://qd.myapp.com/myapp/qqteam/TIM_WEB/img/TIM_PC/qq2x.png)',
    title: '安全',
    desc: '使用QQ号登录，QQ安全中心为你保驾护航。'
  }
]
</script>
