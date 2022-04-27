import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar />
      <div className='content'>
        <Routes>
          {/* category and country are the fields in url of api. Default country is us and default category is business */}
          <Route exact path="/" element={<News key="business" country="in" category="business" />} />
          <Route exact path="/technology" element={<News key="tehnology" country="in" category="technology" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" />} />
          <Route exact path="/science" element={<News key="science" country="in" category="science" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
export default App;
