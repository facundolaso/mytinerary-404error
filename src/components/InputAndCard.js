import React from 'react'
import InputSearch from './InputSearch'
import CityCard from './CityCard'
import '../styles/CardsContainer.css'
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../features/dataAPI'
import { useState } from 'react'

export default function InputAndCard() {

    const [find, setFind] = useState("")
    
    let { data : cities  } = useGetAllCitiesQuery()
    const { data : citiesFilter } = useGetCityNameQuery(find)

    function search(name) {
        setFind(name)
    }

    let citiesData
    if (find == "") {
      citiesData = cities
    } else {
      citiesData = citiesFilter
    }

  return (
    <div className='container'>
    <InputSearch search={search}/>
    <CityCard citiesData={citiesData}>
    </CityCard>
    </div>
    
  )
}
