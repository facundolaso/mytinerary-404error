import React from 'react'
import CityDetails from '../components/CityDetails'
import Itinerary from '../components/ItineraryCard'
import '../styles/Details.css'
import { useEffect } from 'react'
import { useGetItineraryCityQuery, useGetDetailCityQuery} from '../features/dataAPI'

export default function DetailsPage() {
    let id
    let queryString = window.location.search
    let params = new URLSearchParams(queryString)
    id = params.get("id")
    let { data: itineraries } = useGetDetailCityQuery(id)
    let { data: itinerariesCity } = useGetItineraryCityQuery(id)

  return (
    <div className='All-Container'>   
      <CityDetails search={itineraries}/>
      <Itinerary search={itinerariesCity}/>
    </div>

  )
}