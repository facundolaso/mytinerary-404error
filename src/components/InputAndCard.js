import React from 'react'
import InputSearch from './InputSearch'
import CityCard from './CityCard'
import '../styles/CardsContainer.css'
import { useGetAllCitiesQuery } from '../features/dataAPI'

export default function InputAndCard() {

    const { data : cities,
            error,
            isLoading,
            isSuccess,
            isFailed,
          } = useGetAllCitiesQuery()
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
