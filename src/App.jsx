import React from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Productpage from './pages/Productpage';
import Cartpage from './pages/Cartpage';
import NavBar from './components/Navbar';



const App = () => {
  return (
    <div>
      
    <BrowserRouter>
    <NavBar />
   
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<Productpage/>} />
        <Route path="/cart" element={<Cartpage/>} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
};

export default App;
