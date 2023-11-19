import axios from 'axios'

// const API = axios.create({ baseURL: 'http://localhost:5000/' })
const API = axios.create({ baseURL: 'https://basebackend.onrender.com' })



export const getItems = () => API.get('/netflix')
export const getItem = id => API.get(`/netflix/${id}`)
export const editItem = (id, formData) => API.put(`/netflix/${id}`, formData)
export const deleteItem = id => API.delete(`/netflix/${id}`)
export const createItem = formData => API.post('/netflix', formData)
export const createCategory = formData =>
	API.post('/netflix/category', formData)
export const deleteCategory = id => API.delete(`/netflix/category/${id}`)
export const getCategories = () => API.get('/netflix/category')

export const likeItem = formData => API.put('/netflix/item/like', formData)
export const dislikeItem = formData =>
	API.put('/netflix/item/dislike', formData)
export const shareItem = formData => API.get('/netflix/item/share', formData)
export const saveItem = formData => API.put('/netflix/item/save', formData)
export const downloadItem = formData =>
	API.put('/netflix/item/download', formData)
