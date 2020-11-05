<template>
  <LRX75Hero>
    <template v-slot:header>A Healthy Ocean</template>
    <template v-slot:image><img src="https://www.flaticon.com/svg/static/icons/svg/2739/2739396.svg"></template>
    Sharks help foster a healthy and vibrant marine ecosystem, by maintaining a structure to the food chain.
    This has a profound and lasting impact on the continued growth of the ecosystem.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "1WhySharksAreImportant",
  components: {
    LRX75Hero
  }
}
</script>

<style scoped lang="scss">
h1 {
  font-size: 6em;
  font-family: "acumin-pro-condensed";
  text-align: center;
  text-transform: uppercase;
}
</style>