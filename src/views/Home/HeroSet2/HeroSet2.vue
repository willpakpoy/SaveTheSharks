<template>
  <div class="hero-set-1">
    <what-we-do-to-sharks />
    <a-healthy-ocean />
    <carbon-emissions />
  </div>
</template>

<script>
// @ is an alias to /src
import WhatWeDoToSharks from "./1WhatWeDoToSharks";
import AHealthyOcean from "./2AHealthyOcean";
import CarbonEmissions from "./3CarbonEmissions";


export default {
  name: "Home",
  components: {
    WhatWeDoToSharks,
    AHealthyOcean,
    CarbonEmissions
  }
};
</script>

<style scoped lang="scss">
.hero-set-1 {
  background: var(--c-g-color-2);
}
</style>
