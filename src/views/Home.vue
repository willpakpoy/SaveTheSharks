<template>
  <div id="hero-1" class="hero">
    <p>
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/25/25415.svg"
      />Scroll to continue
    </p>
    <p>Over 100 million<br />sharks are killed<br />every year.</p>
  </div>

  <hero-set-1 />
  <hero-set-2 />
</template>

<script>
// @ is an alias to /src
import HeroSet1 from "@/views/Home/HeroSet1/HeroSet1";
import HeroSet2 from "@/views/Home/HeroSet2/HeroSet2";


export default {
  name: "Home",
  components: {
    HeroSet1,
    HeroSet2
  }
};
</script>

<style scoped lang="scss">
#hero-1 {
  background: url(https://images.pexels.com/photos/1700656/pexels-photo-1700656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
    no-repeat center center fixed;
  background-size: cover;
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  height: 100vh;
  p {
    color: #fff;
    margin: 0px;
    padding: 20px;
    &:nth-child(2) {
      padding: 64px;
      text-align: right;
      font-family: acumin-pro-condensed;
      text-transform: uppercase;
      font-size: 90px;
    }
    &:nth-child(1) {
      font-size: 20px;
      animation: pulsate 2s ease-out;
      opacity: 0.3;
      animation-iteration-count: infinite;
      display: flex;
      align-items: center;
      img {
        display: inline;
        height: 1.4em;
        margin-right: 10px;
        filter: invert(1);
      }
    }
  }

  /*
  p:nth-child(2) {
    margin: 0px;
    padding: 64px;
    font-size: 90px;
    color: #fff;
    text-align: right;
    font-family: acumin-pro-condensed;
    text-transform: uppercase;
  }*/
}
</style>
