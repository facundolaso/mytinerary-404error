import React from 'react'
import CityDetails from '../components/CityDetails'
import ItineraryCard from '../components/ItineraryCard'
import '../styles/Details.css'

export default function DetailsPage() {
  return (
    <div className='All-Container'>   
      <CityDetails/>
      <ItineraryCard/>
    </div>

  )
}