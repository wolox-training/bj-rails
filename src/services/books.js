import api, { API_DEFAULT_HEADERS } from '@/config/api.js'

export const getAllBooks = () => {
  api.setHeaders(API_DEFAULT_HEADERS)
  return api.get('/books')
}
