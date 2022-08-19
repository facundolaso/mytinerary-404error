import './App.css';
import EventsCarousel from './components/EventsCarousel';
import Welcome from './components/Welcome.js';
import PageLayout from './layout/PageLayout';


function App() {
  return (
    <div>
      <PageLayout>
      <EventsCarousel/>
      <Welcome/>
      </PageLayout>
    </div>
  );
}

export default App;
