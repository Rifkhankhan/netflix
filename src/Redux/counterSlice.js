import { createSlice }  from '@reduxjs/toolkit'

const counterSlice = createSlice ({
    name:'count',
    initialState:{
        count:0,
        showCounter:true
    },
    reducers:{
        increment(state){
            state.count++  // state.count
        },
        decrement(state){
            state.count = state.count - 1
        }, 
        increase(state,action){
            state.count = state.count +action.amount
        },
        showCounter(state){
            state.showCounter = !state.showCounter
        }
    }
})

export const counterAction = counterSlice.actions
export default counterSlice.reducer