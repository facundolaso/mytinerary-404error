import { configureStore } from '@reduxjs/toolkit'
import citiesSlice from './citiesSlice'
import itineraiesSlice from './itineraiesSlice'


export const store = configureStore({
    reducer: {
        cities: citiesSlice,
        itineraries: itineraiesSlice,
    }
})