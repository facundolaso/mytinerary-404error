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

        like: builder.mutation({ query: (id) => ({ url: `/itineraries/likes/${id}`, method: 'PATCH', headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`} })})

    })
})

export default itinerarysSlice

export const { useAddItineraryMutation, useDeleteItineraryMutation, useLikeMutation } = itinerarysSlice
