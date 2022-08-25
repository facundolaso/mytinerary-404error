import React from 'react'
import '../styles/Footer.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Footer() {

    const pages = [
        { name: 'Home', to: '/' },
        { name: 'Cities', to: '/cities' },
        { name: 'New City', to: '/new-city' },
    ]

    const link = (page) => <LinkRouter className='Footer-anchor' to={page.to} key={page.name}>{page.name}</LinkRouter>

    const scrollTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }

    const date = new Date()

    return (
        <div className='Footer-container'>
            <div>
                <h2 className='Footer-h2'>
                    MyTinerary
                </h2>
                <h4>
                    {date.toLocaleDateString()}
                </h4>
            </div>
            <hr className='Footer-separator' />
            <div className="Footer-links-container">
                <h4 className='Footer-h4'>Links</h4>
                {pages.map(link)}
            </div>
            <hr className='Footer-separator' />
            <div className='Footer-rrss-container'>
                <a className='Footer-anchor' href="https://github.com/facundolaso" target="_blank">
                    <img className='Footer-rrss-logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo_github" />
                    Facundo Laso
                </a>
                <a className='Footer-anchor' href="https://github.com/engelberthRetamal" target="_blank">
                    <img className='Footer-rrss-logo' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="logo_github" />
                    Engelberth Retamal
                </a>
            </div>
            <hr className='Footer-separator' />
            <button className='Footer-button-arrow-up' onClick={scrollTop}>
                <div className="Arrow-up" ></div>
            </button>
        </div>
    )
}
