<template>
  <div class="footer f-outer">
    <div class="footer f-inner">
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
      color: #fff;
      .madeby {
        a {
          color: #fff;
          text-decoration: none;
          &:hover {text-decoration: underline;}
        }
      }
    }
  }
}
</style>