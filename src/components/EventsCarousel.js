import Carousel from './Carousel'
import axios from 'axios'
import {useEffect, useState} from 'react'
import api from '../api'

export default function EventsCarousel() {
    const [cities, setCities] = useState([])
    
    useEffect(()=>{
        axios.get(api+'/cities/')
            .then(response => setCities(response.data.response))
    },[])
    
return (
    <Carousel data={cities} range={4} interval={5}/>
)
}
