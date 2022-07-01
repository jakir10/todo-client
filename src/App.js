import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calender from './Components/Home/Calender';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calender" element={<Calender />} />
      </Routes>
      <Footer></Footer>


    </div >
  );
}

export default App;
