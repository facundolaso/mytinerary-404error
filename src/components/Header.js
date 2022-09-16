import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Header.css';
import { useSignOutMutation } from '../features/usersSlice';
import Alerts from './Alerts'
import { useNavigate } from "react-router-dom"


const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'Mytinerary', to: '/mytinerary' }
]

const adminPages = [
  { name: 'New City', to: '/new-city' },
  { name: 'Edit City', to: '/edit-city' },
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}><span>{page.name}</span></LinkRouter>

export default function Header() {
  
  let [signOut, result] = useSignOutMutation()

  const navigate = useNavigate()

  let userPhoto
  let loggedUser = {}
  if (localStorage.getItem("loggedUser")) {
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    userPhoto = loggedUser.user.photo
  } else {
    userPhoto = '../../user.png'
  }

  async function handleCredentialResponse() {

    let userData = {
      mail: loggedUser.user.mail,
    }
    console.log(loggedUser.user.mail)
    await signOut(userData);
    localStorage.removeItem("loggedUser");
  }
  if (result.isSuccess) {
    setTimeout(myFunction, 5000)
    

}
function myFunction(){
    navigate('/');
    window.location.reload()
}

  return (
    <div className="Header-container">
      <div className="Header-nav">

        {loggedUser.user ? (
          <div>
            {loggedUser.user.role == "admin" ? (
              <div className='Header-link-normal'>
                {pages.map(link)}
                {adminPages.map(link)}
              </div>

            ) : (
              <div className='Header-link-normal'>
                {pages.map(link)}
              </div>
            )}
          </div>
        ) : (
          <div className='Header-link-normal'>
            {pages.map(link)}
          </div>
        )}

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            {loggedUser.user ? (
              <>
                {loggedUser.user.role == "admin" ? (
                  <li>
                    {pages.map(link)}
                    {adminPages.map(link)}
                  </li>
                ) : (
                  <li>{pages.map(link)}</li>
                )}
              </>
            ) : (
              <li>{pages.map(link)}</li>
            )}
          </ul>
        </div>
      </div>

      <div className='Header-logo'>
        <LinkRouter className='Header-link-logo' to={pages[0].to}>  <img className='Header-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icon2" />
          <h2>MyTinerary</h2> </LinkRouter>
      </div>
      <div className="dropdown">
        <button className="dropbtn"><img className='Header-user' src={userPhoto} alt="icon3" /></button>
        {loggedUser.user ? (
          <>
            {loggedUser.user.role == "admin" ? (
              <div className="dropdown-content">
                <h4 className='user-name'>{loggedUser.user.name} </h4><LinkRouter to="/signup" >Sign up</LinkRouter><LinkRouter to="/" onClick={handleCredentialResponse}>Sign out</LinkRouter>
              </div>
            ) : (
              <div className="dropdown-content">
              <h4 className='user-name'>{loggedUser.user.name} </h4><LinkRouter to="/" onClick={handleCredentialResponse}>Sign out</LinkRouter>
              </div>
              )}
          </>
        ) : (
          <div className="dropdown-content"><LinkRouter to="/signin" ><span>Sign In</span></LinkRouter>
            <LinkRouter to="/signup" ><span>Sign Up</span></LinkRouter> </div>
        )}
      </div>
      <Alerts alert={result} />
    </div>
  )
}

