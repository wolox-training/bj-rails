<template lang="pug">
  .book-detail-container
    img.book-image
    h3.title
      | Nombre del libro
    h4.subtitle
      | Autor del libro
</template>

<script>
export default {
  name: 'bookDetail'
}
</script>

<style lang="scss" scoped>
@import '@/scss/commons/colors.scss';

.book-detail-container {
  align-items: flex-start;
  background-color: $white;
  box-shadow: 3px 3px 5px $shadow;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: 20px;
  max-height: 275px;
  max-width: 240px;
  padding: 20px;
  width: 100%;

  .book-image {
    height: 100%;
    max-height: 170px;
    max-width: 200px;
    width: 100%;
  }

  .title {
    color: $black;
    font-size: 20px;
    font-weight: bold;
  }

  .subtitle {
    font-size: 16px;
  }
}

</style>