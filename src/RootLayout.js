import React from 'react'
import LargeWithNewsletter from './components/Footer'
import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
            <LargeWithNewsletter/>
    </>        
  )
}

export default RootLayout