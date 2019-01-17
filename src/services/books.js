import api from '@/config/api.js'

export const getAllBooks = () => api.get('/books')
