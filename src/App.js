import './App.css';
import EventsCarousel from './components/EventsCarousel';
import Welcome from './components/Welcome.js';
import PageLayout from './layout/PageLayout';
import CitiesPage from './pages/CitiesPage';
import UnderConstruction from './pages/UnderConstruction.js';


function App() {
  return (
    <div>
    {/* <PageLayout>  */}
    <CitiesPage/>
    {/* <Welcome/> */}
    {/* <EventsCarousel/> */}
    {/* <UnderConstruction/> */}
    {/* </PageLayout> */}
    </div>
  );
}

export default App;
