import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar />
      <div className='content'></div>
      <Routes>
        {/* category and country are the fields in url of api. Default country is us and default category is business */}
        <Route exact path="/" element={<News key="business" country="in" category="business" />} />
        <Route exact path="/technology" element={<News key="tehnology" country="in" category="technology" />} />
        <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
        <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
      </Routes>
    </div>
  );
}
export default App;
