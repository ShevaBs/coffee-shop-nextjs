import { configureStore, combineReducers } from '@reduxjs/toolkit'
import productSlice from '../features/productSlice'

const rootReducer = combineReducers({
  products: productSlice
})

const store = configureStore({
  reducer: rootReducer,
})

export default store