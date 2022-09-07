import Carousel from './Carousel'
import { useGetAllCitiesQuery, useGetCityNameQuery } from '../features/dataAPI'


export default function EventsCarousel() {

    let { data : cities  } = useGetAllCitiesQuery()
    
return (
    <Carousel cities={cities} range={4} interval={5} slides={3}/>
)
}
