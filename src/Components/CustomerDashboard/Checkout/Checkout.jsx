import React, { useState } from "react";
import { SiPaytm } from "react-icons/si";
import { FaHandshake } from "react-icons/fa6";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import Navbar from "../Navbar/Navbar";

const Checkout = () => {
  const navigate = useNavigate();
  const [selectPayment, setSelectPayment] = useState("");
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
    cod: "",
  });

  const handlePaytm = () => setSelectPayment("Paytm");
  const handleUpi = () => setSelectPayment("Upi");
  const handleCc = () => setSelectPayment("Credit");
  const handleCod = () => setSelectPayment("cod");
  const handleOrder = () => {
    navigate("/Order");
  };

  return (
    
    <div >
    <Navbar/>
    <div className="payment-method">
      <button className="paytm" onClick={handlePaytm}>
        <SiPaytm size={25} /> Paytm
      </button>
      <button className="upi" onClick={handleUpi}>
        <CiBank size={25} /> UPI
      </button>
      <button className="cc" onClick={handleCc}>
        <BsCreditCard2FrontFill size={25} /> CREDIT CARD
      </button>
      <button className="cod" onClick={handleCod}>
        <FaHandshake size={25} /> CASH ON DELIVERY
      </button>

      {/* Paytm Input */}
      {selectPayment === "Paytm" && (
        <div className="paytm-form">
          <label>Enter Paytm Number:</label>
          <input
            type="text"
            placeholder="Enter your number"
            value={payment.number}
            onChange={(e) => setPayment({ ...payment, number: e.target.value })}
          />
          <div className="button-wrapper">
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}

      {/* Credit Card Input */}
      {selectPayment === "Credit" && (
        <div className="card-form">
          <label>Cardholder Name:</label>
          <input
            type="text"
            placeholder="John Doe"
            value={payment.name}
            onChange={(e) => setPayment({ ...payment, name: e.target.value })}
          />

          <label>Card Number:</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={payment.cardNumber}
            onChange={(e) =>
              setPayment({ ...payment, cardNumber: e.target.value })
            }
          />

          <label>Expiry Date:</label>
          <input
            type="text"
            placeholder="MM/YY"
            value={payment.expiry}
            onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
          />

          <label>CVV:</label>
          <input
            type="password"
            placeholder="123"
            value={payment.cvv}
            onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
          />

          <div className="button-wrapper">
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
      {/* Cash on delivery */}
      {selectPayment === "cod" && (
        <div className="cod-form">
          <label>Cash On delivery:</label>
          <input
            type="number"
            placeholder="91XXXX"
            value={payment.Cod}
            onChange={(e) => setPayment({ ...payment, cod: e.target.value })}
          />
          <div className="button-wrapper">
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
      {selectPayment === "Upi" && (
        <div className="upi-form">
          <label>Enter UPI ID:</label>
          <input
            type="text"
            placeholder="example@upi"
            value={payment.upiId}
            onChange={(e) => setPayment({ ...payment, upiId: e.target.value })}
          />
          <div className="button-wrapper">
            <button onClick={handleOrder}>Place Order</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Checkout;
