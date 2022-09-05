import React from 'react'
import '../styles/CityCard.css';
import { Link as LinkRouter } from 'react-router-dom'
import InputSearch from './InputSearch';

export default function CityCard({cities}) {

    const cityView = (city) => (
        <div className='card' key={city._id} style={{ backgroundImage: `url(${city.photo})` }}>
            <div className='info'>
                <h2 className='title'>{city.city}</h2>
                <LinkRouter className="card-button" to={`/details?id=${city._id}`}> Read More</LinkRouter>
            </div>
        </div>
    )
    return (
        <div className='cards-container'>
            <div className='title-cities-page'>
                <h1 >Cities</h1>
            </div>
            {cities?.response.map(cityView)}
        </div>
    )
}
