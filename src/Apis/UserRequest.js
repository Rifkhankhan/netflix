import axios from 'axios'

// const API = axios.create({ baseURL: 'http://44.226.145.213:5000/' })
const API = axios.create({ baseURL: 'https://basebackend.onrender.com' })

// export const getUser = (userId) => API.get(`user/${userId}`);

export const updateUser = (id, formData) => API.put(`user/${id}`, formData)

// export const getAllUser = () => API.get('user');

// export const followUser = (id, data) =>
// 	API.put(`user/${id}/followRequest`, data);

// export const unFollowUser = (id, data) =>
// 	API.put(`user/${id}/unfollow`, { _id: data });

// export const changeStatus = (id, userId, data) =>
// 	API.put(`user/${id}/status`, { userId: userId, status: data });

// export const getAllEducationDetails = (id) => API.get(`user/${id}/education`);

// export const getAllSkillDetails = (id) => API.get(`user/${id}/skills`);
// export const getAllInterestDetails = (id) => API.get(`user/${id}/interest`);

// add into card api
export const getAuthData = uid => API.get(`user/${uid}`)

// get user data
export const getUserData = token => API.get(`user/userData/${token}`)

// add into card api
export const addToCard = (uid, pid) => API.get(`user/card/${uid}/${pid}`)
//increase card item
export const increaseCardItem = (uid, pid) =>
	API.put(`user/increase/${uid}/${pid}`)

//decrease card item
export const decreaseCardItem = (uid, pid) =>
	API.put(`user/decrease/${uid}/${pid}`)

//get wish list
export const getWishList = uid => API.get(`product/wish/${uid}`)

//get wish list
export const getCardList = uid => API.get(`user/card/${uid}`)

//upload photo
export const uploadProfilePhoto = (uid, formData) =>
	API.put(`user/uploadPhoto/${uid}`, formData)
