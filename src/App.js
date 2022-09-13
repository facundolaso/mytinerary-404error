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


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={<NewCityPage />} />
          <Route path='/details' element={<DetailsPage/>} />
          <Route path='/edit-city' element={<EditCityPage/>} />
          <Route path='/mytinerary' element={<MytineraryPage/>} />
          <Route path='/signup' element={<SignUpPage/>} />
          <Route path='/signin' element={<SignInPage/>} />
          <Route path='*' element={<UnderConstruction />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
