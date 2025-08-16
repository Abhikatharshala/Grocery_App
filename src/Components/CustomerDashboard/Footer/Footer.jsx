import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";





const Footer = () => {


  return (
    <footer id='footer'> 
    <div className='footer'>
    <div className='media'>
    <h2>GroceryDash</h2>
    <div className='social'>
<BsInstagram size={32} />
<FaFacebook  size={32}/>
<FaTwitter size={32} />
<FaLinkedinIn  size={32}/>
</div>
    <p>©GroceryDash Marketplace Private Limited</p>
    </div>
    <div className='about'>
    <span>Home</span>
    <span>Delivery Areas</span>
    <span>Careers</span>
    <span>customer Support</span>
    <span>Press</span>
    </div>
    <div className='privacy'>
    <span>Privacy Policy</span>
    <span>Terms of Use</span>
    <span>Responsible Disclosure Policy</span>
    <span>Sell on GroceryDash</span>
    <span>Patner with GroceryDash</span>
        
    </div>
    <div className='app'>
        <p>Download App</p>
        <button><BiLogoPlayStore />  Get it on PlayStore</button>
        <button><FaApple />  Get it on AppStore</button>

    </div>
      
    </div>
    </footer>
  )
}

export default Footer
