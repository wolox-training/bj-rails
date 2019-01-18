<template lang="pug">
  .dashboard-container
    nav-bar
    books-list(:booksList='booksList')
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import NavBar from '@/components/NavBar'
import BooksList from '@/components/BooksList'
import { getAllBooks } from '@/services/books.js'

export default {
  name: 'dashboard',
  components: {
    NavBar,
    BooksList
  },
  methods: {
    ...mapActions([
      'getBooksList'
    ])
  },
  mounted () {
    this.getBooksList()
  },
  computed: {
    ...mapGetters([
      'booksList'
    ])
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
  height: 100%;
  width: 100vw;
}
</style>
