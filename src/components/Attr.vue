<template>
  <div class="footer f-outer">
    <div class="footer f-inner">
      <p class="links">
        <a target="_BLANK" href="https://github.com/willpakpoy/SaveTheSharks">Code</a>
        <a target="_BLANK" href="https://radfordcollege-my.sharepoint.com/:w:/g/personal/0521858_radford_act_edu_au/ETPXC2eBkaJKtw1Hz3L6QkwB4IqGwm7RqorJsXTChZ3Z3A?email=kathleen.notley%40radford.act.edu.au&e=w8Lsc0">Rationale</a>

      </p>
      <p class="madeby">👨‍💻 with ❤ by 🎓 <a href="//willpakpoy.com" target="_blank">Will Pak Poy</a></p>
    </div>
  </div>
</template>

<script>
export default {
name: "Attr"
}
</script>

<style scoped lang="scss">
.footer {
  &.f-outer {
    background-color: var(--c-x-oxford);
    .f-inner {
      max-width: var(--default-page-width);
      margin-left: auto;
      margin-right: auto;
      padding: 10px 0px;
      color: slategrey;
      .madeby {
        a {
          color: slategrey;
          text-decoration: none;
          &:hover {text-decoration: underline;}
        }
      }
      .links {
        a {
          margin-right: 10px;
          color: slategrey;
          text-decoration: none;
          &:hover {text-decoration: underline;}
        }
      }
    }
  }
}
</style>