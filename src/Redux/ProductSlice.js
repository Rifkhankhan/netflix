import { createSlice }  from '@reduxjs/toolkit'


const initialAuthState = {
    ship:[],
    receive:[],
    wish:[],
    returns:[],
    cancel:[],
    review:[],
    shipped:[],
    processing:[],
    pending:[],
    loading:false,
    products:[],
    product:[]
}
const productSlice = createSlice ({
    name:'product',
    initialState:initialAuthState,
    reducers:{
       toggleLoadingSpinner(state,action) {
        state.loading = !state.loading
       },
        addCard(state,action){
            state.cardItems = action.payload
            let userData = JSON.parse(localStorage.getItem('user'))
            userData.result.card = state.cardItems
          
            localStorage.setItem('user',JSON.stringify(userData))
        },
        addWish(state,action){
            state.wish = action.payload
        },
        getCardLength(state){
            state.cardItems = JSON.parse(localStorage.getItem('user')).result.card.length
        },
        removeFromCard(state,action){
        }, 
        buy(state,action){
            state.buyItems.push(action.payload)
        }, 
        
        cancelOrderItem(state,action){},
        orders(state,action){},
        getPendingProductList(state,action) {
            state.pending = action.payload
        }, 
        getProcessingList(state,action) {
            state.processing = action.payload
        },

        getShipList(state,action) {
            state.ship = action.payload
        },

        getCancelList(state,action) {
            state.cancel = action.payload
        },
        getReturnsList(state,action) {
            state.returns = action.payload
        },
        getAllShippedList(state,action) {
            state.shipped = action.payload
        },

        removeItemFromPending(state,action){
            state.pending = state.pending.filter(pen => pen.id !== action.payload)
        },
        addItemIntoProcessing(state,action){
            state.processing.push(action.payload)
        },
        addItemIntoShip(state,action){
            state.ship.push(action.payload)
        },
        removeItemFromProcessing(state,action){
            state.processing = state.processing.filter(pen => pen.id !== action.payload)
        },
        fetchProducts(state,action) {
            state.products = action.payload
        }
      
    }
})

export const productAction = productSlice.actions
export default productSlice.reducer