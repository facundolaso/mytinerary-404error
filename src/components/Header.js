import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Header.css';
import { useSignOutMutation } from '../features/usersSlice';

const pages = [
  { name: 'Home', to: '/' },
  { name: 'Cities', to: '/cities' },
  { name: 'New City', to: '/new-city' },
  { name: 'Edit City', to: '/edit-city' },
  { name: 'Mytinerary', to: '/mytinerary' }
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}><span>{page.name}</span></LinkRouter>




export default function Header() {
  let [signOut, result] = useSignOutMutation()



  let show
  let userPhoto
  if (localStorage.getItem("loggedUser")) {
    let { user } = JSON.parse(localStorage.getItem("loggedUser"))
    userPhoto = user.photo
    show = <div className="dropdown-content">
      <h4 className='user-name'>{user.name} </h4><LinkRouter to="/" onClick={handleCredentialResponse}>Sign out</LinkRouter> </div>

    async function handleCredentialResponse() {

      let userData = {
        mail: user.mail,
      }

      await signOut(userData);
      localStorage.removeItem("loggedUser");
      window.location.reload()

    }
  } else {
    show = <div className="dropdown-content"><LinkRouter to="/signin" ><span>Sign In</span></LinkRouter>
      <LinkRouter to="/signup" ><span>Sign Up</span></LinkRouter> </div>
      userPhoto = '../../user.png'
  }

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
        <LinkRouter className='Header-link-logo' to={pages[0].to}>  <img className='Header-image' src="https://media.discordapp.net/attachments/993579792077176842/1010294134168358942/ico.png?width=843&height=676" alt="icon2" />
          <h2>MyTinerary</h2> </LinkRouter>
      </div>
      <div className="dropdown">
        <button className="dropbtn"><img className='Header-user' src={userPhoto} alt="icon3" /></button>
        {show}
      </div>
    </div>
  )
}

