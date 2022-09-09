import React from 'react'
import '../styles/CityCard.css';
import { Link as LinkRouter } from 'react-router-dom'

export default function CityCard({citiesData}) {

    const cityView = (city) => (
        <div className='card' key={city._id} style={{ backgroundImage: `url(${city.photo})` }}>
            <div className='info'>
                <h2 className='title'>{city.city}</h2>
                <LinkRouter className="card-button" to={`/details?id=${city._id}`}> Read More</LinkRouter>
            </div>
        </div>
    )

    let show
    if (citiesData?.response.length > 0) {
        show = citiesData?.response.map(cityView)

    } else {
        show = "There are no cities to display, please try again"
    }

    return (
        <div className='cards-container'>
            <div className='title-cities-page'>
                <h1 >Cities</h1>
            </div>
            {
                show
            }
        </div>
    )
}
