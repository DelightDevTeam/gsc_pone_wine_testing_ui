import React, { useContext } from 'react'
import '../assets/css/home.css'
import Banners from '../components/Banners'
import Marquee from '../components/Marquee'
import GameTabs from '../components/GameTabs'
import AdsBanner from '../components/AdsBanner'
import { LanguageContext } from '../contexts/LanguageContext'
import SideNavbar from '../components/SideNavbar'

 const HomePage = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div>
      <AdsBanner/>
      <SideNavbar content={content} />
      <Banners/>
      <Marquee/>
      <GameTabs/>
    </div>
  )
}

export default HomePage
