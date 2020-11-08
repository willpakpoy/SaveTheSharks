<template>
  <div id="hero-set-4">
    <difference />
    <w-w-f />
    <be-mindful />
  </div>
</template>

<script>
// @ is an alias to /src
import Difference from "./1Difference";
import WWF from "./2WWF";
import BeMindful from "./3BeMindful";

export default {
  name: "Home",
  components: {
    Difference,
    WWF,
    BeMindful
  }
};
</script>

<style scoped lang="scss">
#hero-set-4 {
  background: var(--c-g-color-4);
  color: whitesmoke!important;
  /deep/ a {
    color: whitesmoke!important;
  }
}
</style>
