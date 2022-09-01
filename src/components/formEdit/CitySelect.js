import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import '../../styles/form/InputEdit.css'


export default function CitySelect() {
    
    const [cities, setCities] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data.response))
    },[])

    console.log(cities)
    const inputForm = (city) => <option  name={city.city} value={city.city} >{city.city}</option>


  return (
        <select className="option">
            {cities.map(inputForm)}
        </select>
  )
}
