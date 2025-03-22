import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import FooterProviders from './FooterProviders'
import { Toaster } from 'react-hot-toast'
import { AuthContextProvider } from '../contexts/AuthContext'
import { GeneralContextProvider } from '../contexts/GeneralContext'
import { GameContextProvider } from '../contexts/GameContext'
const Layout = () => {
  return (
    <AuthContextProvider>
      <GeneralContextProvider>
        <GameContextProvider>
          <div className='container'>
            <Toaster />
            <Navbar />
            <Outlet />
            <FooterProviders />
            <Footer />
          </div>
        </GameContextProvider>
      </GeneralContextProvider>
    </AuthContextProvider>
  )
}

export default Layout
