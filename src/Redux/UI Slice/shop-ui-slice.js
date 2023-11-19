import {createSlice} from '@reduxjs/toolkit'

const initilaUiState = {
    notification:null,
    isLoading:false,
    error:null
}

const uiSlice = createSlice({
    name:'shop-ui',
    initialState:initilaUiState,
    reducers:{
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible
        },
        showNotification(state,action){
            state.notification = {
                status:action.payload.status,
                title:action.payload.title,
                message:action.payload.message
            }
        },
        changeAsLoading(state){
            state.isLoading = true
        },
        changeAsLoadingFinished(state){
            state.isLoading = false
        },
    }
})


export const shopUiActions = uiSlice.actions
export default uiSlice.reducer

