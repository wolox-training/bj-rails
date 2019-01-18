import api, { AUTHORIZATION } from '@/config/api.js'
import LocalStorageService from './localStorage'
import { API_DEFAULT_HEADERS } from '../config/api'

export const signUp = userData => api.post('/users', userData)

export const login = userData => api.post('/users/sessions', userData)

export const setCurrentSession = data => {
  const sessionData = {
    ...API_DEFAULT_HEADERS,
    [AUTHORIZATION]: data.access_token
  }
  api.setHeaders(sessionData)
  LocalStorageService.setSessionData(sessionData)
}

export const deleteCurrentSession = () => {
  LocalStorageService.removeSessionData()
  api.setHeaders(AUTHORIZATION)
}
