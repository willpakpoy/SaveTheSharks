<template>
  <div class="hero-set-2">
    <what-we-do-to-sharks />
    <commercial-shark-finning />
    <entanglement-in-fishing-gear />
  </div>
</template>

<script>
// @ is an alias to /src
import WhatWeDoToSharks from "./1WhatWeDoToSharks";
import CommercialSharkFinning from "./2CommercialSharkFinning";
import EntanglementInFishingGear from "./3EntanglementInFishingGear";

export default {
  name: "Home",
  components: {
    WhatWeDoToSharks,
    CommercialSharkFinning,
    EntanglementInFishingGear
  }
};
</script>

<style scoped lang="scss">
.hero-set-2 {
  background: var(--c-g-color-2);
}
</style>
