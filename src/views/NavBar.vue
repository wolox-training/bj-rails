<template lang="pug">
  .nav-bar
    img.navbar-logo(src='../assets/wolox-logo.png')
    button.logout-button(@click='logout')
      | Logout

</template>

<script>
import { deleteCurrentSession } from '@/services/auth'

export default {
  name: 'navBar',
  methods: {
    logout () {
      deleteCurrentSession()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped >
@import "../scss/commons/colors.scss";

.nav-bar {
  background-color: $white;
  border-top: 5px solid $scooter;
  box-shadow: 0 3px 5px $shadow;
  display: flex;
  height: 100%;
  justify-content: space-between;
  max-height: 50px;
  padding: 5px 20%;
  width: 100vw;

  .navbar-logo {
    height: 100%;
    margin: 0;
  }

  .logout-button {
    background-color: $transparent;
    border: 0;
    color: $black;
    font-weight: bold;
  }
}
</style>
