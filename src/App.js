import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <News key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={ <News key="tehnology" country="in" category="technology"/>} />
      </Routes>
    </div>
  );
}
export default App;
