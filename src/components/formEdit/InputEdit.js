import React from 'react'
import '../../styles/form/Input.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CitySelect from './CitySelect'

const form = [
    {
        name: "city",
        placeholder: "Type here city name",
    },
    {
        name: "country",
        placeholder: "Type here country name",
    },
    {
        name: "photo",
        placeholder: "Type here image url",
    },
    {
        name: "population",
        placeholder: "Type here population of city",
    },
    {
        name: "fundation",
        placeholder: "Type here age of fundation",
    }
]

export default function InputEdit() {

    const [cities, setCities] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/cities`)
            .then(response => setCities(response.data.response))
    }, [])

    console.log(cities)
    const inputSelect = (city) => <option name={city.city} value={city._id} >{city.city}</option>
    const inputForm = (inputData) => <input className="input" name={inputData.name} placeholder={inputData.placeholder} type="text" key={inputData.name} />
    
    let selected = ""
    let urlEdit = ""
    const idEdit = (event) => {
        selected = event.target.value
        console.log(selected)
        urlEdit = selected
    }

    let city, country, photo = ""
    let population, fundation = 0
    let formChange = (event) => {
        switch (event.target.name) {
            case "city":
                console.log("Case city")
                city = event.target.value
                break;
            case "country":
                console.log("Case country")
                country = event.target.value
                break;
            case "photo":
                console.log("Case country")
                photo = event.target.value
                break;
            case "population":
                console.log("Case country")
                population = event.target.value
                break;
            case "fundation":
                console.log("Case country")
                fundation = event.target.value
                break;
        }
    }

    let sendEditedCity = (event) => {
        event.preventDefault()
        axios.patch("http://localhost:4000/cities/"+urlEdit, { city: city, country: country, photo: photo, population: population, fundation: fundation });
        alert("City Edited")
    }

    return (
        <div className='new-city-container'>
            <div className='form-decoration-container'>
                <img className='form-decoration' src="../../../form_decoration.svg" alt="" />
            </div>
            <div className='form-container'>
                <div className='form-image-container'>
                    <img src="https://images.unsplash.com/photo-1584323803806-7b041fea92f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" alt="" />
                </div>
                <div className="input-wrapper">
                    <h1>Modify a city</h1>
                    <select className="option" onChange={idEdit}>
                        {cities.map(inputSelect)}
                    </select>
                    <form className='input-form' action='' onChange={formChange} method="post" target="_blank" >
                        {form.map(inputForm)}
                        <input type="submit" className='submit-btn' onClick={sendEditedCity} value='Send'></input>
                    </form>
                </div>
            </div>
            <div className='form-decoration-plane-container'>
                <img src="../../../form_decoration_plane.svg" alt="" />
            </div>
        </div>

    )
}

