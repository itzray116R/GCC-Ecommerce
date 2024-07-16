import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>GCC 4 U</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">  {/* same div applied multiple times so that the styling gets applied */}
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">  {/* to each icon, instead of all of the together as a group */}
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}
