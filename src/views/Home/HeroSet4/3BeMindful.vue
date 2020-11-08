<template>
  <LRX75Hero>
    <template v-slot:header>Be mindful</template>
    <template v-slot:image
      ><img src="https://www.flaticon.com/svg/static/icons/svg/1598/1598431.svg"
    /></template>
    Be mindful of the products that you purchase and ensure that they do not contain squalene, a moisturiser, that has been sourced from sharks.
    Also ensure that your seefood has been ethically sourced, and be wary of shark fin soup.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "3BeMindful",
  components: {
    LRX75Hero
  }
};
</script>
