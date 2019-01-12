import api from '@/config/api.js'
import LocalStorageService from './localStorage'

export const signUp = userData => api.post('/users', userData)

export const login = userData => api.post('/users/sessions', userData)

export const setCurrentSession = data => {
  const sessionData = {
    access_token: data.access_token
  }
  LocalStorageService.setSessionData(sessionData)
}
