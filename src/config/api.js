import { create } from 'apisauce'

const api = create({
  baseURL: process.env.VUE_APP_BASE_URL
})

export default api
