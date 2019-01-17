import { create } from 'apisauce'
import LocalStorageService from '../services/localStorage'

const api = create({
  baseURL: process.env.VUE_APP_BASE_URL
})

export const AUTHORIZATION = 'Authorization'
export const ACCESS_TOKEN = 'access_token'
export const CONTENT_TYPE = 'Content-Type'
export const APP_JSON = 'application/json'

export const API_DEFAULT_HEADERS = {
  [AUTHORIZATION]: LocalStorageService.getSessionData()[AUTHORIZATION],
  [CONTENT_TYPE]: APP_JSON
}

api.setHeaders(API_DEFAULT_HEADERS)

export default api
