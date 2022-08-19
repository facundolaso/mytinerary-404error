import React from 'react'
import '../styles/Welcome.css';

export default function Welcome() {
  return (
    <div className='Welcome-background'>
      <div className='Welcome-container'>
        <img className='Welcome-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icono"/>     
        <h1 className='Welcome-h1'>MyTinerary</h1>
        <p className='Welcome-slogan'>A trip to happiness</p>
        <button class="cssbuttons-io-button"> Get started
          <div class="icon">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M3.691 10h6.309l-3-7h2l7 7h5c1.322-.007 3 1.002 3 2s-1.69 1.993-3 2h-5l-7 7h-2l3-7h-6.309l-2.292 2h-1.399l1.491-4-1.491-4h1.399l2.292 2"/></svg>
          </div>
        </button>        
      </div>
    </div>
  )
}
