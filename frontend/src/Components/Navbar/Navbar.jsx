import React, { useContext, useState } from 'react';
import "./Navbar.css";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItem}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none'}}>Shop {menu==="shop"?<hr/>:<></>}</Link> </li>
        <li onClick={()=>{setMenu("men")}}><Link to='/men' style={{textDecoration:'none'}}>Men {menu==="men"?<hr/>:<></>}</Link></li>
        <li onClick={()=>{setMenu("women")}}><Link to='/women' style={{textDecoration:'none'}}>Women {menu==="women"?<hr/>:<></>}</Link> </li>
        <li onClick={()=>{setMenu("kids")}}><Link to='kid' style={{textDecoration:'none'}}>Kids {menu==="kids"?<hr/>:<></>}</Link> </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='login' style={{textDecoration:'none'}}><button>Login</button></Link> 
        <Link to='cart' style={{textDecoration:'none'}}><img src={cart_icon} alt="cart-icon" /></Link>
        
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>

  )
}

export default Navbar;