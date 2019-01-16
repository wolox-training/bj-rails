import api, { AUTH_HEADER, ACCESS_TOKEN } from '@/config/api.js'
import LocalStorageService from './localStorage'

export const signUp = userData => api.post('/users', userData)

export const login = userData => api.post('/users/sessions', userData)

export const setCurrentSession = data => {
  const sessionData = {
    AUTH_HEADER,
    [ACCESS_TOKEN]: data.access_token
  }
  LocalStorageService.setSessionData(sessionData)
}

export const deleteCurrentSession = () => {
  LocalStorageService.removeSessionData()
  api.setHeader(AUTH_HEADER)
}
