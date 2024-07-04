import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");   {/* menu state is initially set to shop */}

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>GCC 4 U</p>
        </div>
        <ul className="nav-menu">       {/* creates an unordered list */}
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>       {/* upon clicking a list item, (e.g. Buttons), the state */}
            <li onClick={()=>{setMenu("shells")}}><Link style={{ textDecoration: 'none' }} to='/shells'>Shells</Link>{menu==="shells"?<hr />:<></>}</li>       {/* the state will be changed to "buttons". Using the ternary */} 
            <li onClick={()=>{setMenu("buttons")}}><Link style={{ textDecoration: 'none' }} to='/buttons'>Buttons</Link>{menu==="buttons"?<hr />:<></>}</li>       {/* operator, the horizontal line and its properties will */}
            <li onClick={()=>{setMenu("internals")}}><Link style={{ textDecoration: 'none' }} to='/internals'>Internals</Link>{menu==="internals"?<hr />:<></>}</li>    {/* only display if the state is of that button */}
        </ul>   {/* the Link tag sets the path depending on which page you click, for the App.js Router component to decide which page to render */}
        <div className="nav-login-cart">    {/* container for login button and cart */}
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>     {/* circle counter for cart items */}
        </div>
    </div>
  )
}
