<template>
  <hero-75>
    <div class="lrx-hero">
      <div class="image">
        <slot name="image" />
      </div>
      <div class="content">
        <h1><slot name="header" /></h1>
        <p><slot /></p>
      </div>
    </div>
  </hero-75>
</template>

<script>
import Hero75 from "./Hero75";
export default {
  name: "LRX75Hero",
  components: {
    Hero75
  }
}
</script>

<style scoped lang="scss">
.lrx-hero {
  display: grid;
  flex-wrap: nowrap;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  .image {
    /deep/ img {
      height: 100%;
      width: 100%;
    }
  }
  .content {
    grid-column: 2 / 4;
    opacity: 1;
  }
  h1 {
    font-family: acumin-pro-condensed;
    font-size: 4.5em;
    margin: 0px;
    text-transform: uppercase;
  }
  p {
    font-size: 2em;
  }
}
</style>