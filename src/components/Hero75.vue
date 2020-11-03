<template>
  <div class="hero 75">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Hero75"
};
</script>

<style scoped lang="scss">
.hero {
  height: 75vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
