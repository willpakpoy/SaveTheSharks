<template>
  <LRX75Hero>
    <template v-slot:header>Entanglement in fishing gear</template>
    <template v-slot:image
      ><img src="https://www.flaticon.com/svg/static/icons/svg/3555/3555785.svg"
    /></template>
    Sharks often sadly become entangled in fishing gear, causing great harm to
    the animal. This could be disregarded commercial fishing equiptment, or
    'ghost fishing gear'; equiptment that has been lost or disconnected from the
    boat and has been left in the ocean.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "3CarbonEmissions",
  components: {
    LRX75Hero
  }
};
</script>
