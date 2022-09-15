import React from 'react'
import Itinerary from '../components/ItineraryCard'
import { useGetItineraryUserQuery } from '../features/dataAPI'
import '../styles/ItineraryCard.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function MytineraryPage() {
    let loggedUser = {}
    if (localStorage.getItem("loggedUser")) {
        loggedUser = JSON.parse(localStorage.getItem("loggedUser")).user
    }

    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    let { data: itineraries } = useGetItineraryUserQuery(loggedUser.id)

    return (
        <div className='container-mytinerary'>
            <button className='card-button' onClick={back}>Back</button>
            <div>
                <Itinerary search={itineraries} />
            </div>
        </div>

    )
}
