<template>
  <div id="hero-set-1">
    <why-sharks-are-important />
    <a-healthy-ocean />
    <carbon-emissions />
  </div>
</template>

<script>
// @ is an alias to /src
import WhySharksAreImportant from "./1WhySharksAreImportant";
import AHealthyOcean from "./2AHealthyOcean";
import CarbonEmissions from "./3CarbonEmissions";


export default {
  name: "Home",
  components: {
    WhySharksAreImportant,
    AHealthyOcean,
    CarbonEmissions
  }
};
</script>

<style scoped lang="scss">
#hero-set-1 {
  background: var(--c-g-color-3);
}
</style>
