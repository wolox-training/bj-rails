<template lang="pug">
  .book-detail-container
    img.book-image(:src='book.image_url' alt='book-cover-image')
    h3.title
      | {{ book.title }}
    h4.subtitle
      | {{ book.author }}
</template>

<script>
export default {
  name: 'bookDetail',
  props: ['book']
}
</script>

<style lang="scss" scoped>
@import 'src/scss/commons/colors.scss';

.book-detail-container {
  align-items: flex-start;
  background-color: $white;
  box-shadow: 3px 3px 5px $shadow;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin: 20px;
  min-height: 275px;
  max-width: 240px;
  padding: 20px;
  width: 100%;

  .book-image {
    max-height: 170px;
    max-width: 200px;
    object-fit: cover;
    width: 100%;
  }

  .title {
    color: $black;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }

  .subtitle {
    font-size: 16px;
    line-height: 1;
    text-align: left;
  }
}
</style>
