import React from 'react'
import {Link as LinkRouter, useNavigate } from 'react-router-dom'
import '../styles/Details.css'


export default function CityDetails({search}) {

    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }

    let cities = search

    let buttonItinerary
    if (localStorage.getItem("loggedUser")){
        buttonItinerary =  <LinkRouter className='card-button' to={`/new-itinerary?id=${cities?.response._id}`}>New Itinerary</LinkRouter>
    }

    return (
        <>
        <div className='cards-container-details'>
        <div className='card-details-details' style={{ backgroundImage: `url(${cities?.response.photo})` }}>
            <div className='info-details'>
                <h1 className='title-details'>{cities?.response.city}</h1>
                <hr className='separator'/>
                <h2>{cities?.response.country}</h2>
                <p>Amount of population:</p>
                <p>{cities?.response.population}</p>
                <p>Founded in:</p>
                <p>{(new Date(cities?.response.fundation)).getFullYear().toLocaleString()}</p>
                <button className='card-button' onClick={back}>Back</button>
            </div>
        </div>
            {buttonItinerary}
    </div> 
    </>
    )
}
