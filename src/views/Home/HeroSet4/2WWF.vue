<template>
  <LRX75Hero>
    <template v-slot:header>WWF</template>
    <template v-slot:image
      ><img src="https://www.flaticon.com/svg/static/icons/svg/630/630650.svg"
    /></template>
    You can make a donation to the <a target="_BLANK" href="https://sharks.panda.org">WWF</a> to help fund their extensive conservation and protection efforts of sharks.
  </LRX75Hero>
</template>

<script>
import LRX75Hero from "@/components/LRX75Hero.vue";

export default {
  name: "2WWF",
  components: {
    LRX75Hero
  }
};
</script>
