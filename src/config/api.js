import { create } from 'apisauce'

const api = create({
  baseURL: process.env.VUE_APP_BASE_URL
})

export const AUTH_HEADER = 'Authorization'
export const ACCESS_TOKEN = 'access_token'

export default api
