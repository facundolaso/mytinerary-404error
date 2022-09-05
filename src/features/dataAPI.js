import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const dataAPI = createApi({
    reducerPath: "dataAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000"
    }),

    endpoints: (builder) => ({
        getAllCities: builder.query({query: () => "/cities"})
    })
})

export default dataAPI
export const {useGetAllCitiesQuery} = dataAPI