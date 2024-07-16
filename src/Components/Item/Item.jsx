import React from 'react'
import './Item.css'

export const Item = (item) => {
  return (
    <div className='item'>    {/* formats every image with its info to an item component */}
        <img src={item.image} alt="" />
        <p>{item.name}</p>
        <div className="item-price">
            ${item.price}
        </div>
    </div>
  )
}
