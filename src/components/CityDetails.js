import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link as LinkRouter, useNavigate } from 'react-router-dom'
import '../styles/Details.css'
import api from '../api'


export default function CityDetails() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        let queryString = window.location.search
        let params = new URLSearchParams(queryString)
        const id = params.get("id")

        axios.get(api+`/cities/${id}`)
            .then(response => setCities(response.data.response));
    }, [])

    const navigate = useNavigate();

    const back = () => {
        navigate(-1)
    }
    
    return (
        
        <div className='cards-container'>
        <div className='card-details' style={{ backgroundImage: `url(${cities.photo})` }}>
            <div className='info-details'>
                <h1 className='title-details'>{cities.city}</h1>
                <hr className='separator'/>
                <h2>{cities.country}</h2>
                <p>Amount of population:</p>
                <p>{cities.population}</p>
                <p>Founded in:</p>
                <p>{(new Date(cities.fundation)).getFullYear().toLocaleString()}</p>
                <button className='card-button' onClick={back}>Back</button>
            </div>
        </div>
    </div> 

    )
}
