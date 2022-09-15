import React from "react";
import '../styles/ItineraryCard.css'
import Activities from "./Activities";
import Comments from "./Comments";
import { useDeleteItineraryMutation } from "../features/itineraiesSlice";


export default function Itinerary({ search }) {

  let itineraries = search

  const [ deleteCity , result ] = useDeleteItineraryMutation()

  const handleAddTask = async () => {
    let itineraryId = itineraries?.response[0]._id
      await deleteCity(itineraryId);
      console.log(itineraryId)
      window.location.reload()
  }

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
          <div className="itinerary-user-info">
            <img src={itinerary.user.photo} alt="user" />
            <div>
            <h5>{itinerary.user.name}</h5>
            <small>Likes: {itinerary.likes}</small>
            </div>
          </div>
          {localStorage.getItem("loggedUser") ?
              <div>
                <button className='itineraryUser-button' type="">Modificar</button>
                <button className='itineraryUser-button' onClick={handleAddTask}>Eliminar</button>
              </div>
              :
              ''
            }
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
