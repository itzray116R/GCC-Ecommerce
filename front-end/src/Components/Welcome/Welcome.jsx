import React from 'react'
import './Welcome.css'
import arrow_icon from '../Assets/arrow.png'
import shell_image from '../Assets/shell.png'
import gcc from '../Assets/gcc.png'

export const Welcome = () => {
  return (
      <div className="welcome">
        <div className="welcome-left">
          <h2>--WELCOME!--</h2>
          <div>
              <p>customize your very own</p>
              <p>gamecube controller</p>
          </div>
      </div>
      <div className="welcome-right">
        <img src={gcc} alt="" />
      </div>
    </div>
  )
}
