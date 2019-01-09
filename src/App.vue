<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
@import "scss/application";
#app {
  align-items: center;
  color: #2c3e50;
  display: flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  justify-content: center;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
