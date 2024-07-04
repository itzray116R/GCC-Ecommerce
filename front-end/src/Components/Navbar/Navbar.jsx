import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("home");   {/* menu state is initially set to shop */}

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to='/'><img onClick={()=>{setMenu("home")}} src={logo} alt="" /></Link>       {/* Menu is set to "home" so red line will not display on other menu items */}
            <Link to='/'><p onClick={()=>{setMenu("home")}}>GCC 4 U</p></Link>
        </div>
        <ul className="nav-menu">       {/* creates an unordered list. Upon clicking a list item, (e.g. Buttons), the state */}
            <Link to='/shells'><li onClick={()=>{setMenu("shells")}}>Shells{menu==="shells"?<hr />:<></>}</li></Link>       {/* the state will be changed to "buttons". Using the ternary */} 
            <Link to='/buttons'><li onClick={()=>{setMenu("buttons")}}>Buttons{menu==="buttons"?<hr />:<></>}</li></Link>       {/* operator. The horizontal line and its properties will */}
            <Link to='/internals'><li onClick={()=>{setMenu("internals")}}>Internals{menu==="internals"?<hr />:<></>}</li></Link>    {/* only display if the state is of that button */}
        </ul>   {/* the Link tag sets the path depending on which page you click, for the App.js Router component to decide which page to render */}
        <div className="nav-login-cart">    {/* container for login button and cart */}
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>     {/* circle counter for cart items */}
        </div>
    </div>
  )
}
