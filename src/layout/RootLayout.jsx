import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

const RootLayout = () => {

  return (

    <div>

         <NavBar/>
         <Outlet/>
         
    </div>

  )
}

export default RootLayout