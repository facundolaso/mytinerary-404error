import React from "react";
import '../styles/ItineraryCard.css'
import { useGetItineraryCityQuery, } from '../features/dataAPI'
import Activities from "./Activities";


export default function Itinerary() {
  let queryString = window.location.search
  let params = new URLSearchParams(queryString)
  const id = params.get("id")

  let { data: itineraries } = useGetItineraryCityQuery(id)

  const itineraryView = (itinerary) => (
    
    <div className="itinerary-card" key={itinerary._id}>
      <div className="itinerary-card-body">
        <span className="itinerary-tag tag-teal">{itinerary.city.city}</span>
        <h4>
          Itinerary Name: {itinerary.name}
        </h4>
        <p>
          Duration  {itinerary.duration}
        </p>
        <p>
          $ PRICE {itinerary.price}
        </p>
        <p>
          Tags: {itinerary.tags}
        </p>
        <div className="itinerary-user">
          <img src={itinerary.user.photo} alt="user" />
          <div className="itinerary-user-info">
            <h5>{itinerary.user.name}</h5>
            <small>LIKES: {itinerary.likes}</small>
          </div>
        </div>
        <Activities itinerary={itinerary._id}/>
      </div>
    </div>

) 
return (
  
    <div className="itinerary-container">
      {itineraries?.response.map(itineraryView)}
    </div>
  )
}
