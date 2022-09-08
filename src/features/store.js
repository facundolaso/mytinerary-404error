import { configureStore } from '@reduxjs/toolkit'
import dataAPI from './dataAPI'


export const store = configureStore({
    reducer: {
        [dataAPI.reducerPath]: dataAPI.reducer,
    }
})