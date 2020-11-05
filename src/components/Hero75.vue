<template>
  <div class="hero 75 outer">
    <div class="hero 75 inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero75"
};
</script>

<style scoped lang="scss">
.hero.inner {
  height: 75vh;
  width: var(--default-page-width);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
