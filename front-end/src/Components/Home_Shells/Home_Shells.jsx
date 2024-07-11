import React from 'react'
import './Home_Shells.css'
import { Item } from '../Item/Item'
import data_product from '../Assets/home_shells'

export const Home_Shells = () => {
  return (
    <div className="home-shells">
        <h1>SHELLS</h1>
        <hr />
        <div className="home-shells-item">
            {data_product.map((item,i)=>{   {/* print out the home_shells images and their information, and map them to an index i */}
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
            })}
        </div>
    </div>
  )
}
