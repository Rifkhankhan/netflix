
import swal from 'sweetalert'
import * as ItemApi from '../Apis/ItemApi'
import * as NetflixAuthApi from '../Apis/NetflixAuthApi'
import { netflixAuthActions } from '../Redux/netflixAuthSlice'


export const getItems = () => async dispatch => {
	try{
		const { data } = await ItemApi.getItems()
		dispatch(netflixAuthActions.getItems(data))
	} catch(err) {
		console.log(err);
	}
}

export const createItem = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.createItem(formData)
		dispatch(netflixAuthActions.createItem(data))
		swal('Success','Successfully Created...!')
	} catch(err) {
		console.log(err);
	}
}

export const createCategory = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.createCategory({name:formData})
		dispatch(netflixAuthActions.createCategory(data))
	} catch(err) {
		console.log(err);
	}
}


export const deleteCategory = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.deleteCategory(formData)
		dispatch(netflixAuthActions.deleteCategory(data))
	} catch(err) {
		console.log(err);
	}
}


export const editItem = (id,formData) => async dispatch => {

	try{
		const { data } = await ItemApi.editItem(id,formData)
		swal('Successfull',"Sucessfully updated!")
		dispatch(netflixAuthActions.editItem(data))
	} catch(err) {
		console.log(err);
	}
}


export const getCategories = () => async dispatch => {
	try{
		const { data } = await ItemApi.getCategories()
		dispatch(netflixAuthActions.getCategories(data))
	} catch(err) {
		console.log(err);
	}
}
export const likeItem = (formData) => async dispatch => {
	console.log(formData);
	try{
		const { data } = await ItemApi.likeItem(formData)
		dispatch(netflixAuthActions.likeItem(data))
		console.log(data);

	} catch(err) {
		console.log(err);
	}
}
export const dislikeItem = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.dislikeItem(formData)
		dispatch(netflixAuthActions.dislikeItem(data))
	} catch(err) {
		console.log(err);
	}
}

export const saveItem = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.saveItem(formData)
		dispatch(netflixAuthActions.saveItem(data))
	} catch(err) {
		console.log(err);
	}
}
export const downloadItem = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.downloadItem(formData)
		dispatch(netflixAuthActions.downloadItem(data))
	} catch(err) {
		console.log(err);
	}
}
export const shareItem = (formData) => async dispatch => {
	try{
		const { data } = await ItemApi.shareItem(formData)
		dispatch(netflixAuthActions.shareItem(data))
	} catch(err) {
		console.log(err);
	}
}


export const getUsers = (token) => async dispatch => {
	try{
		const { data } = await NetflixAuthApi.getUsers(token)
		dispatch(netflixAuthActions.getUsers(data))
	} catch(err) {
		console.log(err);
	}
}