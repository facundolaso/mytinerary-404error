import {Link as LinkRouter} from 'react-router-dom'
import '../styles/Header.css';

const pages = [
    {name: 'Home'  ,  to:'/'},
    {name:  'Cities' ,  to: '/cities'},
    {name: 'New City' ,  to: '/new-city'},
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}><span>{page.name}</span></LinkRouter>


export default function Header() {

  return (
    <div className="Header-container">
        <div className="Header-nav">
        <div className='Header-link-normal '>
        {pages.map(link)}
        </div>
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
              </label>

              <ul className="menu__box">
                <li>{pages.map(link)}</li>
              </ul>
            </div>           
        </div>

        <div className='Header-logo'>              
          <LinkRouter className='Header-link-logo' to={pages[0].to}>  <img className='Header-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icono2" />
          <h2>MyTinerary</h2> </LinkRouter>
        </div>
        <div className="dropdown">
          <button className="dropbtn"><img className='Header-user' src="../../usuario.png" alt="icono3" /></button>
          <div className="dropdown-content">
            <a href="#">Log in</a>
            <a href="#">Register</a>
          </div>
        </div>
    </div>
  )}

