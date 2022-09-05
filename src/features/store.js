import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './citiesSlice'
import itineraiesSlice from './itineraiesSlice'
import dataAPI from './dataAPI'


export const store = configureStore({
    reducer: {
        [dataAPI.reducerPath]: dataAPI.reducer,
    }
})