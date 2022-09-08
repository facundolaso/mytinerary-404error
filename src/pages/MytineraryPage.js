import React from 'react'
import Itinerary from '../components/ItineraryCard'
import { useGetItineraryUserQuery } from '../features/dataAPI'
import '../styles/ItineraryCard.css'
import {Link as LinkRouter, useNavigate } from 'react-router-dom'




export default function MytineraryPage() {
    const navigate = useNavigate();
    
        const back = () => {
            navigate(-1)
        }
    let { data: itineraries } = useGetItineraryUserQuery("63164a517bfd9487c2451605")
    return (
        <div className='container-mytinerary'>
            <button className='card-button' onClick={back}>Back</button>
            <div>
            <Itinerary search={itineraries} /> 
            </div>
        </div>

    )
}
