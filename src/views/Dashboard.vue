<template lang="pug">
  .dashboard-container
    nav-bar
    books-list(:booksList='booksList')
</template>

<script>
import NavBar from '@/components/NavBar'
import BooksList from './BooksList'
import { getAllBooks } from '../services/books.js'

export default {
  name: 'dashboard',
  components: {
    NavBar,
    BooksList
  },
  methods: {
    async getBooksList () {
      const response = await getAllBooks()
      if (response.ok) {
        this.booksList = response.data
      }
    }
  },
  mounted () {
    this.booksList = this.getBooksList()
  },
  data () {
    return {
      booksList: null
    }
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
