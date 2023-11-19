import axios from 'axios'

// const API = axios.create({ baseURL: 'http://localhost:5000/' })
const API = axios.create({ baseURL: 'https://basebackend.onrender.com' })

export const logIn = formData => API.post('/user/signin', formData)
export const signUp = formData => API.post('/user/signup', formData)
export const autoLogin = token => API.get(`/user/userData/${token}`)
