import React from 'react'
import InputSearch from './InputSearch'
import CityCard from './CityCard'
import axios from 'axios'
import {useEffect, useState} from 'react'
import '../styles/CardsContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCity } from '../features/citiesSlice'


export default function InputAndCard() {
    const cities = useSelector((state) => state.cities.cities)
    const dispatch = useDispatch()
    
    useEffect(()=>{
      dispatch(getCity())
      
    },[])
    
    // const [cities, setCities] = useState([])
    // const [find, setFind] = useState("")
    // const urlData = "http://localhost:4000/cities/?city="
    
    // useEffect(()=>{
    //     axios.get(`${urlData}${find}`)
    //         .then(response => setCities(response.data.response))
    // },[find])

    // function search(name) {
    //     setFind(name)
    // }

  return (
    <div className='container'>
    <InputSearch/>
    <CityCard cities={cities}>
        
    </CityCard>
    </div>
    
  )
}
