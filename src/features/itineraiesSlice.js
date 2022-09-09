import { createSlice } from '@reduxjs/toolkit'

const itinerariesSlice = createSlice({
    name: 'itineraries',
    initialState: [],
    reducers: {
    }
})


export const { todoAdded } = itinerariesSlice.actions
export default itinerariesSlice.reducer