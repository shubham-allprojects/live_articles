import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <News key="business" country="in" category="business" apiKey={apiKey} />} />
        <Route exact path="/technology" element={ <News key="tehnology" country="in" category="technology" apiKey={apiKey}/>} />
        <Route exact path="/entertainment" element={ <News key="entertainment" country="in" category="entertainment" apiKey={apiKey}/>} />
        <Route exact path="/science" element={ <News key="science" country="in" category="science" apiKey={apiKey}/>} />
      </Routes>
    </div>
  );
}
export default App;
