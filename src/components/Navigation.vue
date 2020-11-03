<template>
  <div id="nav-wrap">
    <nav>
      <h1>Save The Sharks</h1>
      <ul>
        <li>Home</li>
        <li>The Facts</li>
        <li>Do Something</li>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped lang="scss">
div {
  backdrop-filter: blur(6px);
  z-index: 500;
  position: absolute;
  width: 100vw;
  background-color: #dddddd90;
  nav {
    max-width: var(--default-page-width);
    margin-left: auto;
    margin-right: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px;
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
        cursor: pointer;
        margin: 0px 10px;
        text-transform: uppercase;
        font-weight: 100;
        transition: 0.2s all;
        &:hover {
          color: var(--c-text-navy-lighter);
          transition: 0.2s all;
        }
      }
    }
  }
  hr {
    border: none;
    border-top: 1.6px solid var(--c-text-navy);
    margin: 0px;
  }
}
</style>
