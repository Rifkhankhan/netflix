import { createSlice } from "@reduxjs/toolkit";


const shopSlice = createSlice({
    name:'shop',
    initialState:{
        shops:[],
        change:false,
        shop:{}
    },
    reducers:{
        replaceShops(state,action){
            state.shops = action.payload
        },
        addShop(state,action){
            const newItem = action.payload
            state.shopsCount++;

            state.shops.push({
                id:newItem.id,
                name:newItem.name,
                area:newItem.area,
                owner:newItem.owner,
                address:newItem.area,
                images:newItem.images
            })
        },
        getShop(state,action){
            state.shop ={...action.payload}
         
        },
        removeShop(state,action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id) 
            state.change = true

            if(state.totalQuantity > 0){

                if(existingItem.quantity === 1)
                {
                    state.items = state.items.filter(item => item.id !== id)
                }
                else if(existingItem.quantity > 1)
                {
                    existingItem.quantity--
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                }
                state.totalQuantity--;
            }
              
        },

    }
})


export const shopActions = shopSlice.actions
export default shopSlice.reducer
