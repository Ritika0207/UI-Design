import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Feature from './components/Feature'
import Arrow from './components/Arrow'
import Popular from './components/Popular'
import Funct from './components/Funct'
import Plans from './components/Plans'
import Carousel from './components/Carousel'
import Frequent from './components/Frequent'
import Nia from './components/Nia'
import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <>
      <Navbar/>
    
      <HeroSection/>
      <Feature/>
      <Arrow/>
      <Popular/>
      <Funct/>
      <Plans/>
      <Carousel/>
      <Frequent/>
    <Nia/>
    <Footer/>
    </>
  )
}

export default App