<template>
  <navigation />
  <div id="content">
    <router-view />
    <attr />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Attr from "@/components/Attr";

export default {
  components: {
    Navigation,
    Attr
  }
};
</script>

<style lang="scss">
@import "./root.scss";
</style>
