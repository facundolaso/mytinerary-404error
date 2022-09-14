import React from 'react'
import SignUp from '../components/SignUp'

export default function NewCityPage() {
  let loggedUser = {}

  if (localStorage.getItem("loggedUser")) {
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
  }

  return (
        <SignUp loggedUser={loggedUser.user}/>
  )
}
