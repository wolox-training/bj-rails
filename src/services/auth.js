import api from '@/config/api.js'

export const signUp = userData => api.post('/users', userData)
