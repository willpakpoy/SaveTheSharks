<template>
  <div class="hero-set-1">
    <why-sharks-are-important />
    <a-healthy-ocean />
  </div>
</template>

<script>
// @ is an alias to /src
import WhySharksAreImportant from "./1WhySharksAreImportant";
import AHealthyOcean from "./2AHealthyOcean";


export default {
  name: "Home",
  components: {
    WhySharksAreImportant,
    AHealthyOcean
  }
};
</script>

<style scoped lang="scss">
.hero-set-1 {
  background-color: var(--c-color-3);

  /*&::before {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 10px;
    top: 10px;
    z-index: -1;
    content: "hello"

    content: "hello";
    position: relative;
    top: -2.6em;
    height: 2.6em;

  }*/
}
</style>
