import * as NetflixAuthApi from '../Apis/NetflixAuthApi';

import swal from 'sweetalert'
import {authUiActions}  from '../Redux/UI Slice/auth-ui-slice'
import { netflixAuthActions } from '../Redux/netflixAuthSlice'


export const logIn = (formData) => async(dispatch) => {
    
    try {
        dispatch(authUiActions.changeAsLoading())
        
        const {data} = await NetflixAuthApi.logIn(formData);
        console.log(data);
        dispatch(netflixAuthActions.login(data))
        swal("Successful!", "Successfully Login!")
    } catch(error) {
        console.log(error);

        if (error.response.status === 400) {
            swal("Please provide an email and password!", "Check the email and password!", "error")
          } else if (error.response.status === 404) {
            swal("You don't have HomeDelivery account!", "Please create an account! Or enter valid credentials!", "error")
          } else if (error.response.status === 409) {
            swal("Wrong Password!", "Please check your password!", "error")
          }
          
    }
    dispatch(authUiActions.changeAsLoadingFinished())
}

export const logUp = (formData) => async(dispatch) => {
    try {
        dispatch(authUiActions.changeAsLoading())
        const {data} = await NetflixAuthApi.signUp(formData);
        dispatch(netflixAuthActions.login(data))
        swal("Successful!", "Successfully Register!")

    } catch(error) {
        console.log(error);
        if (error.response.status === 409) {
            swal("User with this email already exists!", "Check the email address!", "error")
        }else if(error.response.status === 500) {
            swal("Password Error!", "password is shorter than the minimum allowed length (8)!", "warning")

        }

    }

    dispatch(authUiActions.changeAsLoadingFinished())


}

// export const logout = () => async(dispatch) => {
//     dispatch(authUiActions.changeAsLoading())
//     dispatch(authActions.logout())
//     dispatch(authUiActions.changeAsLoadingFinished())
// }

