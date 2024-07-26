import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import carticon from '../Assests/cart_icon.png'

import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu,setmenu]=useState("shop")
    const {getTotalCartItem}=useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt='no logo' />
                <p>SHOPPER</p>

                </div>
                <ul className='nav-menu'>
                    <li onClick={()=>{setmenu("shop")}}> <Link to='/' style={{textDecoration:'none'}} >  shop </Link> {menu==="shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("men")}}>  <Link to='/mens' style={{textDecoration:'none'}}>    Men </Link>  {menu==="men"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("women")}}> <Link to='/womens'style={{textDecoration:'none'}}>  Women </Link> {menu==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenu("kids")}}> <Link to='/kids'style={{textDecoration:'none'}}>    Kids </Link> {menu==="kids"?<hr/>:<></>}</li>

                </ul>

                
                <div className='nav-login-cart'>

                <Link to='/login'>  <button> Login </button> </Link> 
                <Link to='/cart'> <img src={carticon} alt="carticon" /> </Link> 
                <div className='nav-cart-count'>{getTotalCartItem()}</div>
                </div>
      

    </div>
  )
}

export default Navbar
