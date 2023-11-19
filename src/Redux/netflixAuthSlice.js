import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated:false,
    authData:[],
    items:[],
    category:[],
    users:[],
    like:[],
    dislike:[],
    share:[],
    save:[],
    downloads:[],
}
const netflixAuthSlice = createSlice({
    name:'netflixAuth',
    initialState:initialAuthState,
    reducers:{
        login(state,action){
            console.log(action.payload);
            // state.authData = action.payload.result
            state.isAuthenticated = true

            localStorage.setItem('user',JSON.stringify(action.payload))
        },
        logout(state){
            state.isAuthenticated = false
            state.authData = []
            localStorage.removeItem('user')

        },
        autoLogin(state,action){
            state.isAuthenticated = !!localStorage.getItem('user')
            if(state.isAuthenticated) {
                state.authData = JSON.parse(localStorage.getItem('user'))
            }
        },
        createItem(state,action){
            state.items.push(action.payload)
        },
        updateItem(state,action){
            state.items.filter(item => item._id !== action.payload._id)
            state.items.push(action.payload)
        },
        deleteItem(state,action){
            state.items.filter(item => item._id !== action.payload)
        },
        getItems(state,action){
            state.items = action.payload
        },
        createCategory(state,action){
            state.category.push(action.payload)
        },  
        deleteCategory(state,action){
            state.category = state.category.filter(item => item._id !== action.payload._id)
        },
        getCategories(state,action){
            state.category = action.payload
        },
        getUsers(state,action){
            state.users = action.payload
        },
        likeItem(state,action){
            if(!state.like.find(item => item._id === action.payload.item._id)){
                state.like.push(action.payload.item)

                if(state.dislike.find(item => item._id === action.payload.item._id)){
                    state.dislike = state.like.filter(like => like._id !== action.payload.item._id)
                }
            }
        },
        dislikeItem(state,action){
            console.log(action.payload.product);
            console.log(state.like);
            if(!state.dislike.find(item => item._id.toString() === action.payload.product._id.toString())){
                state.dislike.push(action.payload.product)

                if(state.like.find(item => item._id.toString() === action.payload.product._id.toString())){
                    state.like = state.like.filter(like => like._id.toString() !== action.payload.product._id.toString())
                }
            }
        },
        shareItem(state,action){},
        saveItem(state,action){
            state.save.push(action.payload.item)
        },
        downloadItem(state,action){
            if(!state.downloads?.find(item => item._id === action.payload.item._id)){
                state.downloads?.push(action.payload.item)
            }
        },
    }
})

export const netflixAuthActions = netflixAuthSlice.actions

export default netflixAuthSlice.reducer;