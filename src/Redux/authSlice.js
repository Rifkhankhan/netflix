import { createSlice } from "@reduxjs/toolkit";
// dispatch(getOrders())
// dispatch(getUserShipped())
// dispatch(getUserReturns())
// dispatch(getCancelList())
// dispatch(getProcessingList())
// dispatch(getPendingProducts())
const initialAuthState = {
    isAuthenticated:false,
    authData:[],
    orders:[],
    shipped:[],
    returns:[],
    cancel:[],
    processing:[],
    pending:[],
    ship:[],
    card:[],
    wish:[],
    authToken:''
}
const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            console.log(action.payload);
            state.authData = action.payload.user
            state.card = action.payload.user.card
            state.orders = action.payload.user.orders
            state.shipped = action.payload.user.shipped
            state.wish = action.payload.user.wish
            state.authToken = action.payload.token
            localStorage.setItem('user',JSON.stringify(action.payload.token))
            window.location.reload()

            /*
            card orders returns shipped
            */
        },
        logout(state){
            localStorage.clear()
            state.isAuthenticated = false
            state.authData = []
        },
        register(state,action){
            state.authData = action.payload
            state.isAuthenticated = true
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        checkAuthentication(state){
            return state.isAuthenticated
        },
        autoLogin(state,action){
            state.isAuthenticated = !!localStorage.getItem('user')
            state.authData = action.payload
            console.log(action.payload);
            // state.card = action.payload.user?.card
            // state.orders = action.payload.user?.orders
            // state.shipped = action.payload.user?.shipped
        },
        updateUser(state,action){
            state.authData = action.payload
            console.log(action.payload);
            let userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
            state.isAuthenticated = true
            userData.result = state.authData
            localStorage.setItem('user',JSON.stringify(userData))
        },
        updateProfile(state,action) {
            state.authData = action.payload.result
            localStorage.removeItem('user')
            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        getUserOrderList(state,action) {
            state.orders = action.payload
        },
        getUserCancelList(state,action) {
            state.cancel = action.payload
        },
      
        getUserShippedList(state,action) {
            state.shipped = action.payload
        },
       
        getUserReturnsList(state,action) {
            state.returns = action.payload
        },
        getCardList(state,action) {
            console.log(action.payload);
            state.card = action.payload.card
            state.authData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).result : []
            
            let userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
            state.isAuthenticated = true
            userData.result = action.payload
            localStorage.setItem('user',JSON.stringify(userData))
        },
        addCard(state,action) {
            console.log(state);
            if(!state.card.find(item => item._id === action.payload._id)) {
                state.card.push(action.payload)
            }
            else {
                throw new Error('Already Exist this item!')
            }
        },
        getWishList(state,action) {
            state.wish = action.payload
        },

        getAuthData(state,action) {
            state.isAuthenticated = !!localStorage.getItem('user')
            console.log(action.payload[0]);
            state.authData = action.payload[0]
            state.card = action.payload[0].card
            state.orders = action.payload[0].orders
            state.shipped = action.payload[0].shipped
        }
    
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer;