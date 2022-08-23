import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css';

const pages = [
    {name: 'Home'  ,  to:'/'},
    {name:  'Cities' ,  to: '/cities'},
    {name: 'New City' ,  to: '/new-city'},
]

const link = (page) => <LinkRouter className='Header-link' to={page.to}>{page.name}</LinkRouter>


export default function Header() {
  return (
    <div className="Header-container">
        <div className="Header-nav">
            {pages.map(link)}
        </div>
        <div className='Header-logo'>
               
        <LinkRouter className='Header-link-logo' to={pages[0].to}>  <img className='Header-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icono2" />
        <h2>MyTinerary</h2> </LinkRouter>
        </div>
        <div>
        <img className='Header-user' src="http://opherton.com/imagenes/articulos/66/6/337e74ba34080415e432f9e0adc2170e.jpg" alt="icono3" />  
        </div>
    </div>

  )
}
