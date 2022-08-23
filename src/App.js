import './App.css';
import EventsCarousel from './components/EventsCarousel';
import Header from './components/Header';
import Welcome from './components/Welcome.js';
import PageLayout from './layout/PageLayout';
import CitiesPage from './pages/CitiesPage';
import NewCityPage from './pages/NewCityPage';
import UnderConstruction from './pages/UnderConstruction.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
<BrowserRouter>
  <PageLayout> 
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/cities' element={<CitiesPage/>} />
      <Route path='/new-city' element={<NewCityPage/>} />
      <Route path='*' element={<UnderConstruction/> } />
      </Routes>
    </PageLayout>
</BrowserRouter>

  );
}

export default App;
