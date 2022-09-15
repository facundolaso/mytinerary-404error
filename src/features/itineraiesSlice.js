import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'

const itinerarysSlice = createApi({
    reducerPath: "itinerarySlice",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        addItinerary: builder.mutation({ query: itinerary => ({ url: "/itineraries", method: "POST", body: itinerary }) }),

    })
})

export default itinerarysSlice

export const {useAddItineraryMutation} = itinerarysSlice