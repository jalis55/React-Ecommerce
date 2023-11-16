
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx';
import mens_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={mens_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kid' element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route path='/product' element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
      <Footer/>
      
      </BrowserRouter>

      
      

    </div>
  );
}

export default App;
