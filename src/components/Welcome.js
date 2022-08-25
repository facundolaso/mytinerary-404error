import React from 'react'
import '../styles/Welcome.css';
import CallToAction from './CallToAction.js';

export default function Welcome() {
  return (
    <div className='Welcome-background'>
      <div className='Welcome-container'>
        <img className='Welcome-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icono" />
        <h1 className='Welcome-h1'>MyTinerary</h1>
        <p className='Welcome-slogan'>A trip to happiness</p>
        <CallToAction />
      </div>
    </div>
  )
}
