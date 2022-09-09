import { createSlice } from '@reduxjs/toolkit'

const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities : []
    },
    reducers: { }
})

export default citiesSlice.reducer