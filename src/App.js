import './App.css';
import EventsCarousel from './components/EventsCarousel';
import Footer from './components/Footer';
import Welcome from './components/Welcome.js';


function App() {
  return (
    <div>
      <EventsCarousel/>
      <Welcome/>
      <Footer/>    
    </div>
  );
}

export default App;
