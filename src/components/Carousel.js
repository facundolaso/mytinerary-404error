import React from 'react'
import '../styles/Carousel.css';

export default function Carousel(props) {

    const events = props.data

    const eventView = (event) => (
        <div className="Carousel-eventContainer">
            <img src={event.url} />
            <p>{event.title}</p>
        </div>
    )

    return (
        <div>
            <div className="slide">
                <h2>Popular MYtineraries</h2>
                {events.slice(0, 4).map(eventView)}
            </div>
        </div>
    )
}