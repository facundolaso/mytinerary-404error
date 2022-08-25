import React from 'react'
import '../styles/CityCard.css';

export default function CityCard(props) {

    const dataCity = props.data
    console.log(dataCity.url)

    return (

            <div className='card' style={{ backgroundImage:  `url(${dataCity.url})` }}>
                <div className='info'>
                    <h1 className='title'>{dataCity.title}</h1>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className="card-button">Read More</button>
                </div>
            </div>
    )
}
