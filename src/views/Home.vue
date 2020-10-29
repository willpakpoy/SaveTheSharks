<template>
  <div class="hero demo">
    <p>Over 100 million<br/>sharks are killed<br/>every year.</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
.demo {
  height: 100vh;
  background: url(https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  p {
    margin: 0px;
    padding: 64px;
    font-size: 90px;
    color: #fff;
    text-align: right;
    font-family: acumin-pro-condensed;
    text-transform: uppercase;
  }
}
</style>
