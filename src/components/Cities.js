import CityCard from './CityCard'
import '../styles/Cities.css'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function Cities() {

  const [cities, setCities] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data.response))
    },[])

  return (
   
        <CityCard data={cities} key={cities.city}/>
  )
}