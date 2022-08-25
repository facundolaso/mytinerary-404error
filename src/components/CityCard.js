import React from 'react'
import '../styles/CityCard.css';

export default function CityCard(props) {

    

    return (
        <div className='City-container'>
                <div class='card' style={{backgroundImage: props.url }}>
                    <div class='info'>
                        <h1 class='title'>HOLA</h1>
                        <p class='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.</p>
                        <button class="card-button">Read More</button>
                    </div>
                </div>
        </div>
    )
}
