<template lang="pug">
  .book-list-container
    book-list-item(v-for='item in [,,,,,,,]')

</template>

<script>
import BookListItem from './BookListItem'

export default {
  name: 'bookList',
  components: {
    BookListItem
  }
}
</script>

<style lang="scss" scoped>
.book-list-container {
  display: flex;
  flex-wrap: wrap;
  height: 305px;
  margin-top: 55px;
  max-width: 1120px;
  width: 100%;
}
</style>