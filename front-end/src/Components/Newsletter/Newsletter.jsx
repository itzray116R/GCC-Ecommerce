import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="newsletter-submission">
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
