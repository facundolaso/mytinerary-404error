import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'

const itinerarysSlice = createApi({
    reducerPath: "itinerarySlice",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        addItinerary: builder.mutation({ query: itinerary => ({ url: "/itineraries", method: "POST", body: itinerary }) }),

        deleteItinerary: builder.mutation({ query: itineraryid => ({ url: `/itineraries/${itineraryid}`, method: "DELETE", body: itineraryid }) }),

    })
})

export default itinerarysSlice

export const {useAddItineraryMutation, useDeleteItineraryMutation} = itinerarysSlice