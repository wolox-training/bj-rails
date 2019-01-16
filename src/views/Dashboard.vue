<template lang="pug">
  .dashboard-container
    nav-bar
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'dashboard',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/commons/colors.scss';

.dashboard-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: $light-grey;
  height: 100vh;
  width: 100vw;
}

</style>