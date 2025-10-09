import { createSlice } from "@reduxjs/toolkit";



 export const cartSlice = createSlice({

    name : "cart", 
    initialState:[], 

    reducers:{

        addtoCart(state, action){
            state.push(action.payload)
        },

        deleteCart(state, action){
            return state.filter((item) => item.id != action.payload.id)
        }, 

        incrementCart:(state, action) =>{
            const item = state.find((item ) => item.id=== action.payload)

            if(item)
            {
                item.quantity++;
            }

        } ,
        
        decreeMentCart :(state, action) =>{
            const item = state.find((item) => item.id === action.payload)

            if(item && item.quantity > 1 )
            {
                item.quantity-=1 ; 
            }
        }
    }
})


export const {addtoCart,deleteCart,incrementCart,decreeMentCart} = cartSlice.actions; 

export default cartSlice.reducer;