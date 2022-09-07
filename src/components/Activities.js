import React from 'react'
import { useGetActivitieItineraryQuery } from '../features/dataAPI';
import '../styles/Activities.css';


export default function Activities({itinerary}) {

    let { data: activities } = useGetActivitieItineraryQuery(itinerary)

    const activitieView = (activity) => (
        
        <div key={activity._id} className='activity-info'>                 
            <div>
                <h3>{activity.name}</h3>  
            </div>
            <div>
                <h3>{activity.itinerary.name}</h3>        
            </div>   
            <div>
                <img src={activity.photo} alt="image"/>
            </div>
        </div>     
    )

    return (
    <div className='activity-container'>
        <div>
            <h4>ACTIVITIES</h4>
        </div>
        {activities?.response.filter(activity => activity.itinerary._id == itinerary).map(activitieView) }
    </div>
)
}
