import React from 'react'
import './Home_Buttons.css'
import { Item } from '../Item/Item'
import home_buttons from '../Assets/home_buttons'
import home_buttons2 from '../Assets/home_buttons2'
import arrow_icon from '../Assets/arrow.png'

export const Home_Buttons = () => {
  return (
    <div className="home-buttons">
        <div className="home-buttons-left">
          <h1>BUTTONS</h1>
          <hr />
          <div className="home-buttons-btn">
            <p>See more</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="home-buttons-middle">
          {home_buttons.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
          })}
        </div>
        <div className="home-buttons-right">
          {home_buttons2.map((item,index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} price={item.price}/>
          })}
        </div>
    </div>
  )
}
