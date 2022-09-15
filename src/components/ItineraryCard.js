import React from "react";
import '../styles/ItineraryCard.css'
import Activities from "./Activities";
import Comments from "./Comments";


export default function Itinerary({ search }) {
    let itineraries = search

    const itineraryView = (itinerary) => (

        <div className="itinerary-card" key={itinerary._id}>
            <div className="itinerary-card-body">
                <span className="itinerary-tag tag-teal">{itinerary.city.city}</span>
                <h4>
                    {itinerary.name} Itinerary
                </h4>
                <p>
                    Duration: {itinerary.duration}
                </p>
                <p>
                    Price: {itinerary.price}
                </p>
                <p>
                    Tags: {itinerary.tags}
                </p>
                <div className="itinerary-user">
                    <img src={itinerary.user.photo} alt="user" />
                    <div className="itinerary-user-info">
                        <h5>{itinerary.user.name}</h5>
                        <small>Likes: {itinerary.likes}</small>
                    </div>
                </div>
                <Activities itinerary={itinerary._id} />
                <Comments itinerary={itinerary._id} />
            </div>
        </div>

    )
    return (
        <div className="itinerary-container">
            {itineraries?.response.map(itineraryView)}
        </div>
    )
}