import './App.css';
import EventsCarousel from './components/EventsCarousel';
import Welcome from './components/Welcome.js';
import PageLayout from './layout/PageLayout';
import CitiesPage from './pages/CitiesPage';
import NewCityPage from './pages/NewCityPage';
import UnderConstruction from './pages/UnderConstruction.js';


function App() {
  return (
    <div>
    <PageLayout> 
    {/* <NewCityPage/> */}
    <Welcome/>
    <EventsCarousel/>
    <UnderConstruction/>
    </PageLayout>
    </div>
  );
}

export default App;
