import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div className='Footer-container'>
            <div>
                <h2 className='Footer-h2'>
                    MyTinerary
                </h2>
            </div>
            <hr className='Footer-separator' />
            <div className='Footer-links-container'>
                <h4 className='Footer-h4'>Links de interés</h4>
                <a className='Footer-anchor' href="">navegacion</a>
                <a className='Footer-anchor' href="">navegacion</a>
                <a className='Footer-anchor' href="">navegacion</a>
            </div>
            <hr className='Footer-separator' />
            <div className='Footer-rrss-container'>
                <a className='Footer-anchor' href="#">
                    <img className='Footer-rrss-logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo_github" />
                    Facundo Laso
                </a>
                <a className='Footer-anchor' href="#">
                    <img className='Footer-rrss-logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo_github" />
                    Engelberth Retamal
                </a>
            </div>
        </div>
    )
}
