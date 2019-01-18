import { getAllBooks } from '@/services/books'

export default {
  state: {
    booksList: []
  },
  mutations: {
    setBooksList (state, { booksList }) {
      state.booksList = booksList
    }
  },
  actions: {
    async getBooksList (context) {
      const response = await getAllBooks()
      if (response.ok) {
        context.commit('setBooksList', { booksList: response.data })
      }
    }
  },
  getters: {
    booksList: state => state.booksList
  }
}
