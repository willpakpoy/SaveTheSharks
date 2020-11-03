<template>
  <navigation />
  <div id="content">
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
@import "./root.scss";
</style>
