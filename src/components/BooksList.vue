<template lang="pug">
  .books-list-container
    books-list-item(v-for='book in booksList' :key='book.id' :book='book')
</template>

<script>
import BooksListItem from './BooksListItem'

export default {
  name: 'booksList',
  components: {
    BooksListItem
  },
  props: ['booksList']
}
</script>

<style lang="scss" scoped>
.books-list-container {
  display: flex;
  flex-wrap: wrap;
  height: 305px;
  margin-top: 55px;
  max-width: 1120px;
  width: 100%;
}
</style>
