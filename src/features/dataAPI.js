import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'

const dataAPI = createApi({
    reducerPath: "dataAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        addCity: builder.mutation({ query: city => ({ url: "/cities", method: "POST", body: city }) }),

        getAllCities: builder.query({ query: () => "/cities" }),

        getCityName: builder.query({ query: name => `/cities?city=${name}` }),

        updateCity: builder.mutation({ query: ({ id, ...patch }) => ({ url: `/cities/${id}`, method: "PATCH", body: patch }) }),

        getAllItineraries: builder.query({ query: () => "/itineraries" }),

        getItineraryCity: builder.query({ query: id => `/itineraries?city=${id}` }),

        getActivitieItinerary: builder.query({ query: id => `/activities?itinerary=${id}` }),

        getCommentsItinerary: builder.query({ query: id => `/comments?itinerary=${id}` })
    })
})

export default dataAPI
export const { useAddCityMutation, useGetAllCitiesQuery, useGetCityNameQuery, useUpdateCityMutation, useGetAllItinerariesQuery, useGetItineraryCityQuery, useGetActivitieItineraryQuery, useGetCommentsItineraryQuery } = dataAPI