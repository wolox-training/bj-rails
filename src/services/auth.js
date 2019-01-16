import api from '@/config/api.js'

export const signUp = userData => api.post('/users', userData)

export const login = userData => api.post('/users/sessions', userData)
