import React, { useState } from "react";
import '../styles/ItineraryCard.css'
import Activities from "./Activities";
import Comments from "./Comments";
import { useEditItineraryMutation, useDeleteItineraryMutation, useLikeMutation } from "../features/itineraiesSlice";
import Alerts from "./Alerts";
import Like from "./Like";

export default function Itinerary({ search, refetchAction }) {

  const formEditItinerary = [
    {
      name: "name",
      placeholder: "Type here itinerary name",
    },
    {
      name: "price",
      placeholder: "Type here the price of the itinerary",
    },
    {
      name: "tags",
      placeholder: "Type here your tags",
    },
    {
      name: "duration",
      placeholder: "Type here the duration in minutes",
    },
  ]

  const inputForm = (inputData) => <input className="input" name={inputData.name} placeholder={inputData.placeholder} type="text" key={inputData.name} required />


  let itineraries = search

  const [editItinearyOpen, setEditItinerary] = useState(false)
  function toggleEditItinerary() {
    setEditItinerary(wasOpened => !wasOpened)
  }

  let [editItinerary] = useEditItineraryMutation()
  const handleEditItinerary = async (form) => {
    form.preventDefault()
    let id = form.target.id
    const newEditItinerary =
    {
      name: form.target.name.value,
      price: form.target.price.value,
      tags: form.target.tags.value,
      duration: form.target.duration.value,
      id
    };
    await editItinerary(newEditItinerary);
    form.target.reset()
    setEditItinerary(false)
    refetchAction()
  }

  const [deleteCity, result] = useDeleteItineraryMutation()
  const handleDeleteItinerary = async (itineraryId) => {
    await deleteCity(itineraryId.target.id);
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
                  <button className='itineraryUser-button' onClick={toggleEditItinerary}>Modificar</button>
                  <>{editItinearyOpen && (
                    <form id={itinerary._id} className='comment-form' onSubmit={handleEditItinerary}>
                      {formEditItinerary.map(inputForm)}
                      <input className='itineraryUser-button' type="submit" name="" value="Submit" />
                    </form>
                  )}
                  </>

                  <button id={itinerary._id} className='itineraryUser-button' onClick={handleDeleteItinerary}>Eliminar</button>
                </div>
                :
                <>
                  {loggedUser.user.role == "admin" ? <div>
                    <button className='itineraryUser-button' onClick={toggleEditItinerary}>Modificar</button>
                    <>{editItinearyOpen && (
                      <form id={itinerary._id} className='comment-form' onSubmit={handleEditItinerary}>
                        {formEditItinerary.map(inputForm)}
                        <input className='itineraryUser-button' type="submit" name="" value="Submit" />
                      </form>
                    )}
                    </>
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
