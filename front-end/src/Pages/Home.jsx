import React from 'react'
import { Welcome } from '../Components/Welcome/Welcome'
import { Home_Shells } from '../Components/Home_Shells/Home_Shells'
import { Home_Buttons } from '../Components/Home_Buttons/Home_Buttons'

export const Home = () => {     // home page
  return (
    <div>
      <Welcome />
      <Home_Shells />
      <Home_Buttons />
    </div>
  )
}
