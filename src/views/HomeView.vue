<template>
  <AppHeader />
  <TheWelcome />
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import TheWelcome from "../components/TheWelcome.vue";
import Methods from "@/Serve/methods"

import { onMounted, onUpdated, onUnmounted } from 'vue';
export default {
  components: {
    AppHeader,
    TheWelcome,
  },
  setup(){
    onMounted(() => {
      const http = new Methods();
  http
    .posts<any>({
       title: 'foo',
      body: 'bar',
      userId: 1,
    })
    .then(function(res) {
      console.log(res)
    })
    .catch(function(err) {
      console.log(err)
    })

    })
  },
};


</script>
