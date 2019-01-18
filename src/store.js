import Vue from 'vue'
import Vuex from 'vuex'

import Books from '@/vuex/books'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    books: Books
  }
})
