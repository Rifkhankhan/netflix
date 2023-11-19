/* eslint-disable no-unused-expressions */
import swal from 'sweetalert';
import * as UserApi from '../API/UserRequest';
import {productAction} from '../Redux/ProductSlice'
import {authActions} from '../Redux/authSlice'

export const updateUser = (id, formData) => async(dispatch)=>{
    try{
        const {data} = await UserApi.updateUser(id, formData);
        console.log(data);
        if(data && data.success){
         swal('Profile Updated Successfully')
        }
        else{
         swal('Something went wrong')

        }
        dispatch(authActions.updateProfile(data))
    } catch (err) {
      if(err.response.status === 500) {
         swal(err.response.data.message,err.response.data.error)
      }
    }
    window.location.reload()

}

// export const followUser = (id, data) => async(dispatch)=>{
//     dispatch({type: "FOLLOW_USER"})
//     UserApi.followUser(id, data)
// }

// export const unFollowUser = (id, data) => async(dispatch)=>{
//     dispatch({type: "UN_FOLLOW_USER"})
//     UserApi.unFollowUser(id, data)
// }

// export const changeStatus = (id, userId, data) => async(dispatch)=>{
//     dispatch({type: "CHANGE_STATUS"})
//     UserApi.changeStatus(id, userId, data)
// }

export const addToCard = (uid, props) => async(dispatch)=>{
   try{
      dispatch(authActions.addCard(props))
      swal("Hi User Success!", "Successfully added!")

      const {data} = await UserApi.addToCard(uid, props._id);
      
     if(!data.card){
         swal("Hi User Warning!",data.mesg)
 
      }
   }catch (err) {
      console.log(err);
      if(err.message === 'Already Exist this item!') {
         swal(err.message)
      }
      else if(err.response.status === 500) {
         swal(err.response.data.message,err.response.data.error)
      } 
    }
    
}

export const increaseCardItem = (uid, pid) => async(dispatch)=>{

   const {data} = await UserApi.increaseCardItem(uid, pid);
   dispatch(productAction.addCard(data.card))
}

export const decreaseCardItem = (uid, pid) => async(dispatch)=>{

   const {data} = await UserApi.decreaseCardItem(uid, pid);
   dispatch(productAction.addCard(data.card))
}

export const getWishList = (uid) => async(dispatch)=>{
   const {data} = await UserApi.getWishList(uid);
   dispatch(authActions.getWishList(data.products))
}

export const getCardList = (uid) => async(dispatch)=>{

   const {data} = await UserApi.getCardList(uid);
   dispatch(authActions.getCardList(data.products))
}

export const uploadProfilePhoto = (uid,formData) => async(dispatch)=>{

   const {data} = await UserApi.uploadProfilePhoto(uid,formData);
   dispatch(authActions.updateUser(data.user))
   if(data && data.mesg){
      swal('Profile Photo Updated Successfully')
     }
     else{
      swal('Something went wrong')
     }

     window.location.reload()
}

export const getAuthData = (uid) => async(dispatch) => {
   const {data} = await UserApi.getAuthData(uid);
   dispatch(authActions.getAuthData(data))
}

export const getUserData = () => async(dispatch) => {
   const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
   const {data} = await UserApi.getUserData(token);
   data ? dispatch(authActions.getAuthData(data)) : ''
}