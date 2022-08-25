import React from 'react'
import '../styles/CityCard.css';
import {Link as LinkRouter} from 'react-router-dom'

export default function CityCard(props) {

    const dataCity = props.data
    console.log(dataCity.url)

    return (

        <div className='card' style={{ backgroundImage: `url(${dataCity.url})` }}>
            <div className='info'>
                <h1 className='title'>{dataCity.title}</h1>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <LinkRouter className="card-button" to={'*'}> Read More</LinkRouter>
            </div>
        </div>
    )
}
