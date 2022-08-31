import Carousel from './Carousel'
import axios from 'axios'
import {useEffect, useState} from 'react'

export default function EventsCarousel() {
    const [cities, setCities] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:4000/cities/')
            .then(response => setCities(response.data.response))
    },[])
    
return (
    <Carousel data={cities} range={4} interval={5}/>
)
}
