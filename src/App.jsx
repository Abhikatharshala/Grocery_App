import React from "react";
import Signup from "./Components/Signup/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import CustomerDashboard from "./Components/CustomerDashboard/CustomerDashboard";
import MyPostings from "./Components/AdminDashboard/MyPostings/MyPostings";
import "./App.css";
import Postdata from "./Components/AdminDashboard/Postdata/Postdata";
import ProductDetails from "./Components/CustomerDashboard/ProductDetails/ProductDetails";
import Cart from "./Components/CustomerDashboard/Cart/Cart";
import Checkout from "./Components/CustomerDashboard/Checkout/Checkout";
import Order from "./Components/CustomerDashboard/Order/Order";
import Slides from "./Components/CustomerDashboard/Slides/Slides";
import { Navbar } from "react-bootstrap";
import Footer from "./Components/CustomerDashboard/Footer/Footer";
import Categories from "./Components/CustomerDashboard/Category/Category";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        <Route path="/AdminDashboard" element={<AdminDashboard />}>
          <Route path="Postdata" element={<Postdata />} />
          <Route path="MyPostings" element={<MyPostings />} />
        </Route>

        <Route path="/customerDashboard" element={<CustomerDashboard/>} />
        <Route path="ProductDetails/:name" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/Checkout" element={<Checkout/>}/>
        <Route path="/Order" element={<Order/>}/>
        {/* <Route path="Footer" element={<Footer/>}/>
        <Route path="/Category" element={<Categories/>}/>
        <Route path="/CustomerDashboard" element={<CustomerDashboard/>} />
        <Route path="/Navbar" element={<Navbar/>}/> */}
      </Routes>
    </div>
  );
};

export default App;
