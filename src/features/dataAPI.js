import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import api from '../api'

const dataAPI = createApi({
    reducerPath: "dataAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({query: () => "/cities"}),

        getCityName: builder.query({query: name => `/cities?city=${name}`}),

        getAllItineraries: builder.query({query: () => "/itineraries"}),

        getItineraryCity: builder.query({query: id => `/itineraries?city=${id}`}),

        getActivitieItinerary: builder.query({query: id => `/activities?itinerary=${id}`})

    })
})

export default dataAPI
export const {useGetAllCitiesQuery, useGetCityNameQuery, useGetAllItinerariesQuery , useGetItineraryCityQuery, useGetActivitieItineraryQuery} = dataAPI