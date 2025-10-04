import { createSlice } from "@reduxjs/toolkit";



 export const cartSlice = createSlice({

    name : "cart", 
    initialState:[], 

    reducers:{

        addtoCart(state, action){
            state.push(action.payload)
        }
    }
})


export const {addtoCart} = cartSlice.actions; 

export default cartSlice.reducer;