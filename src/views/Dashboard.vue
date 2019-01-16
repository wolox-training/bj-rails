<template lang="pug">
  .dashboard-container
    nav-bar
    books-list(:booksList='booksList')
</template>

<script>
import NavBar from './NavBar'
import BooksList from './BooksList'
import {getAllBooks} from '../services/books.js'

export default {
  name: 'dashboard',
  components: {
    NavBar,
    BooksList
  },
  methods: {
    async getBooksList() {
      const response = await getAllBooks();
      debugger
      if (response.ok) {
        debugger
        this.booksList = response.data
      }
    }
  },
  mounted() {
    this.booksList = this.getBooksList()
  },
  data() {
    return {
      booksList: null
    }
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