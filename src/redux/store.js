import { configureStore , combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key:"root",
  storage
}


const rootReducer = combineReducers({
  cart:cartReducer
})


const persistedeReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
    reducer:{
persistedeReducer
    }
})

export const persistor =  persistStore(store)