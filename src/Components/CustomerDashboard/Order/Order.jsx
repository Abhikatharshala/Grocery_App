import React from 'react';
import "./Order.css";
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate=useNavigate();
  const ordernumber = Math.floor(10000 + Math.random() * 99999);
  const estimatedtime = Math.floor(20 + Math.random() * 50);
  const handleGoHome=()=>{
    navigate("/CustomerDashboard")
  }

  return (
    <div className='orders-container'>
      <div className='order-card'>
        <h1 className="thank-you">Thank you!</h1>
        <p className="order-id">Your Order NO: <span>#{ordernumber}</span></p>
        <h2 className="order-success">Your order has been placed successfully 🛍️</h2>
        <h3 className="delivery-time">Estimated delivery time: {estimatedtime} mins</h3>
        <button className="go-home-btn" onClick={handleGoHome} >Go To Home</button>
      </div>
    </div>
  );
};

export default Order;

