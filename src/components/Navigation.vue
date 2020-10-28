<template>
  <div id="nav-wrap">
    <nav>
      <h1>Save The Sharks</h1>
      <ul>
        <li>Nav #1</li>
        <li>Nav #2</li>
        <li>Nav #3</li>
      </ul>
    </nav>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped lang="scss">
div {
  nav {
    max-width: var(--default-page-width);
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 36px;
      margin: 6px;
    }
    ul {
      list-style-type: none;
      padding-left: 0px;
      margin: 0px;
      display: flex;
      align-items: center;
      li {
        margin: 0px 6px;
        text-transform: uppercase;
        font-weight: 100;
        &:hover {
          font-weight: 900;
        }
      }
    }
  }
  hr {
    border-top: 2px solid var(--c-navy);
    margin: 0px;
  }
}
</style>
