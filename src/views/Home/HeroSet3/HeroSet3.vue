<template>
  <div id="hero-set-3">
    <society />
    <loan-shark />
    <pool-sharks />
  </div>
</template>

<script>
// @ is an alias to /src
import Society from "./1Society";
import LoanShark from "./2LoanShark";
import PoolSharks from "./3PoolSharks";

export default {
  name: "Home",
  components: {
    Society,
    LoanShark,
    PoolSharks
  }
};
</script>

<style scoped lang="scss">
#hero-set-3 {
  background: var(--c-g-color-1);
}
</style>
