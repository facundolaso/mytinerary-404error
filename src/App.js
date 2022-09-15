import './App.css';
import HomePage from './pages/HomePage';
import PageLayout from './layout/PageLayout';
import CitiesPage from './pages/CitiesPage';
import NewCityPage from './pages/NewCityPage';
import DetailsPage from './pages/DetailsPage';
import EditCityPage from './pages/EditCityPage';
import UnderConstruction from './pages/UnderConstruction.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import MytineraryPage from './pages/MytineraryPage';
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage';
import NewItinerary from './components/NewItinerary';

let loggedUser = {}
if (localStorage.getItem("loggedUser")) {
  loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cities' element={<CitiesPage />} />
          {loggedUser.user ? ( <> {loggedUser.user.role == "admin" ?  <Route path='/new-city' element={<NewCityPage />} />  :  '*' } </> ) :  '*' }
          <Route path='/details' element={<DetailsPage/>} />
          {loggedUser.user ? ( <> {loggedUser.user.role == "admin" ?  <Route path='/edit-city' element={<EditCityPage/>} />  :  '*' } </> ) :  '*' }
          {loggedUser.user ? <Route path='/mytinerary' element={<MytineraryPage/>} /> : '' }
          {loggedUser.user ? ( <> {loggedUser.user.role == "admin" ?  <Route path='/signup' element={<SignUpPage/>} />  :  '*' } </> ) :  <Route path='/signup' element={<SignUpPage/>} /> }
          {loggedUser.user ? '*' :  <Route path='/signin' element={<SignInPage/>} /> }
          <Route path='*' element={<UnderConstruction />} />
          {loggedUser.user ? <Route path='/new-itinerary' element={<NewItinerary />} /> : '*'}
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
