import React from "react";
import '../styles/ItineraryCard.css'




export default function Itinerary() {
  return (
      <div class="itinerary-container">
  <div class="itinerary-card">
    <div class="itinerary-card-body">
      <span class="itinerary-tag tag-teal">City Name</span>
      <h4>
       Itinerary Name:
      </h4>
      <p>
        Duration
      </p>
      <p>
        $ PRICE
      </p>
      <p>
        Tags
      </p>
      <div class="itinerary-user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="itinerary-user-info">
          <h5>Name User</h5>
          <small>LIKES</small>
        </div>
      </div>
    </div>
  </div>
  
  </div>
      
  
    
  )
}
