<template>
  <LRX75Hero>
    <template v-slot:header>Sharks help reduce carbon emissions</template>
    <template v-slot:image><img src="https://www.flaticon.com/svg/static/icons/svg/3050/3050850.svg"></template>
    Sharks aid in lowering carbon emissions by preventing overgrazing in seagrass meadows.
    Seagrass consumes vast amounts of carbon from the atmosphere and stores it within itself for energy.
    This greatly reduces the warming of the atmosphere from greenhouse gases.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "3CarbonEmissions",
  components: {
    LRX75Hero
  }
}
</script>