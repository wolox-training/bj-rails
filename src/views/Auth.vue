<template lang="pug">
  .nav-bar
    .items-container
      img.logo(src='../assets/wolox-logo.png')
      button.logout-button
        | Logout

</template>

<script>
export default {
  name: 'auth'
}
</script>

<style lang="scss" scoped>
@import "../scss/commons/colors.scss";

.nav-bar {
  background-color: $white;
  border-top: 5px solid $scooter;
  box-shadow: 0 3px 5px $shadow;
  width: 100vw;

  .items-container {
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;
    max-height: 50px;
    max-width: 1080px;
    padding: 5px 0;

    .logo {
      margin: 0;
    }

    .logout-button {
      background-color: $transparent;
      border: 0;
      color: $black;
      font-weight: bold;
    }
  }
}
</style>
