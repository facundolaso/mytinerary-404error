import React from 'react'
import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <div className='Welcome-container'>
        <h1 className='Welcome-h1'>MyTinerary</h1>
        <p className='Welcome-slogan'>A trip to happiness</p>
        <button type="send" className='Welcome-button'>Access</button>        
    </div>
  )
}
