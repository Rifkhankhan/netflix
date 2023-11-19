import { createSlice } from "@reduxjs/toolkit";


const fruitSlice = createSlice({
    name:'fruit',
    initialState:{
        fruits:[],
        change:false,
        fruit:{}
    },
    reducers:{
        replaceFruits(state,action){
            state.fruits = action.payload
        },
        addFruit(state,action){
            const newItem = action.payload
            state.FruitsCount++;

            state.Fruits.push({
                id:newItem.id,
                name:newItem.name,
                area:newItem.area,
                owner:newItem.owner,
                address:newItem.area,
                images:newItem.images
            })
        },
        getFruit(state,action){
            state.fruit ={...action.payload}
        },
        removeFruit(state,action){
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


export const fruitActions = fruitSlice.actions
export default fruitSlice.reducer
