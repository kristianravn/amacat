import {useState, useEffect} from 'react';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Productpage from './pages/Productpage';
import Cartpage from './pages/Cartpage';
import NavBar from './components/Navbar';
import axios from 'axios'
// import CartItem from './components/CartItem';

const App = () => {
  const [cats, setCats] = useState([]);
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    
    const fetchCats = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
       
        setCats(response.data);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCats();
  }, []);
  return (
    
      
    <BrowserRouter>
     <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage" element={<Productpage cart={cart} setCart={setCart} cats={cats}/>} />
        <Route path="/cart" element={<Cartpage setCart={setCart} cart={cart}/>} />
     
      </Routes>
      </div>
    </BrowserRouter>
    
  );
};

export default App;
