import { configureStore } from '@reduxjs/toolkit'
import dataAPI from './dataAPI'
import itinerarysSlice from './itineraiesSlice'
import usersSlice from './usersSlice'



export const store = configureStore({
    reducer: {
        [dataAPI.reducerPath]: dataAPI.reducer,
        [usersSlice.reducerPath]: usersSlice.reducer,
        [itinerarysSlice.reducerPath]: itinerarysSlice.reducer,
    }
})