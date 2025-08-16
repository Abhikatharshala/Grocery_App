import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./Slides.css"
const Slides = () => {
      const images=["https://thumbs.dreamstime.com/b/vegetables-fruits-28096320.jpg","https://t3.ftcdn.net/jpg/02/71/77/56/360_F_271775672_yo8ZgraN2IHGbfqP2k0PsLjwvmatUNUJ.jpg","https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg"]
 const [image,setimage]=useState(0)
 useEffect(()=>{
  const interval=setInterval(() => {
    setimage((prev)=>(prev +1)% images.length)
  }, 3000);
  return ()=> clearInterval(interval)
 })
  return (
    <div className='slides' id='Slides'>
    
   
     <img src={images[image]} alt="slide"
    
      />
    </div>
  )
}

export default Slides
