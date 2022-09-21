import React from "react";
import '../styles/ItineraryCard.css'
import Activities from "./Activities";
import Comments from "./Comments";
import { useDeleteItineraryMutation, useLikeMutation } from "../features/itineraiesSlice";
import Alerts from "./Alerts";
import Like from "./Like";

export default function Itinerary({ search, refetchAction }) {

  let itineraries = search

  const [deleteCity, result] = useDeleteItineraryMutation()
  const handleAddTask = async (itineraryId) => {
    await deleteCity(itineraryId);
    refetchAction()
  }

  let loggedUser
  if (localStorage.getItem("loggedUser")) {
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  }

  const [like] = useLikeMutation()
  async function handleLike(itinerary) {
    if (localStorage.getItem('token')) {
      try {
        const it = await like(itinerary.target.id);
        if (it.data?.success) {
          refetchAction()
        }
      } catch (error) {
        console.log(error)
      }
    }

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
          $ {itinerary.price}
        </p>
        <p>
          Tags: {itinerary.tags}
        </p>
        <div className="itinerary-user">
          <div className="itinerary-user-info">
            <img src={itinerary.user.photo} alt="user" />
            <div>
              <h5>{itinerary.user.name}</h5>
              <Like handleLike={handleLike} itinerary={itinerary}></Like>
              <small>Likes: {itinerary.likes.length}</small>
            </div>
          </div>
          {localStorage.getItem("loggedUser") ?
            <>
              {loggedUser.user.id == itinerary.user._id ?
                <div>
                  <button className='itineraryUser-button' type="">Modificar</button>

                  <button className='itineraryUser-button' onClick={handleAddTask}>Eliminar</button>
                </div>
                :
                <>
                  {loggedUser.user.role == "admin" ? <div>
                    <button className='itineraryUser-button' type="">Modificar</button>
                  </div> : ''}
                </>
              }
            </>
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
      <Alerts alert={result} />
    </div>
  )
}
