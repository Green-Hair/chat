<template>
  <div>
    <AppHeader />
    <TheWelcome />
  </div>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import TheWelcome from "../components/TheWelcome.vue";

export default {
  components: {
    AppHeader,
    TheWelcome,
  },
};
</script>
