<template>
  <AppHeader />
  <TheWelcome />
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import TheWelcome from "../components/TheWelcome.vue";
import Methods from "@/Serve/methods"
import type {Detail} from "@/Serve/Type";

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
    .detail<any>({
      index:1
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
