import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Slides from './Slides/Slides'
import Category from './Category/Category'
import "./CustomerDashboard.css"
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'


const CoustmerDashboard = () => {

    const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.getElementById(location.hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className='CoustmerDashboar'>
  <Navbar/>
  <div className='Slideimages' >
  <Slides/>
  </div>
  <div>
    <Category/>
  </div>
  <div>
    <Footer/>
  </div>
    </div>
  )
}

export default CoustmerDashboard
