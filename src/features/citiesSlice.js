import { createSlice } from '@reduxjs/toolkit'

const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        cities : []
    },
    reducers: {
        getCity: (state) => {
            state.cities = [
                {
                    city: "Barcelona",
                    country: "España",
                    photo: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                    population: 1620000000,
                    fundation: "2022",
                }
            ]
        }
    }
})

export const { getCity } = citiesSlice.actions
export default citiesSlice.reducer