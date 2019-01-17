<template lang="pug">
  .dashboard-container
    nav-bar
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/commons/colors';

.dashboard-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: $light-grey;
  height: auto;
  width: 100vw;
}

</style>
