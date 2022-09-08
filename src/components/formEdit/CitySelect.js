import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'
import '../../styles/form/InputEdit.css'
import api from '../../api'


export default function CitySelect() {
    
    const [cities, setCities] = useState([])

    useEffect(()=>{
        axios.get(api+'/cities/')
            .then(response => setCities(response.data.response))
    },[])

    const inputForm = (city) => <option className="option" name={city.city} value={city.city} >{city.city}</option>


  return (
        <select className="option">
            {cities.map(inputForm)}
        </select>
  )
}
