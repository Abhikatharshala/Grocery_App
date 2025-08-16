import React from "react";
import { BsCart3 } from "react-icons/bs";
import "./CostmerNavbar.css";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Configuration/Configuration";
import { useState, useEffect } from "react";
import groceryItems from "../../ProductsData/ProductsData";
 

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);


    const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = groceryItems.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const fetchCartCount = async (setCartCount) => {
    const loggedUser = JSON.parse(localStorage.getItem("LoggedinCoustmer"));
    const displayName = loggedUser?.user?.displayName;

    if (!displayName) {
      setCartCount(0);
      return;
    }

    const itemsRef = collection(db, "cart", displayName, "items");
    const snapshot = await getDocs(itemsRef);
    let totalCount = 0;

    snapshot.forEach((doc) => {
      const data = doc.data();
      totalCount += data.count || 1;
    });

    setCartCount(totalCount);
  };

  fetchCartCount(setCartCount);

  return (
    <div className="costmernavbar">
      <nav className="navbar">
        <div className="logo">GroceryDash</div>
        <div className="location">📍 Hyderabad</div>
       <ul className="nav-links">
          <li>
            <Link to="/CustomerDashboard#Slides">Home</Link>
          </li>
          <li>
            <Link to="/CustomerDashboard#products">Products</Link>
          </li>
          <li>
            <Link to="/CustomerDashboard#Category">Categories</Link>
          </li>
          <li>
            <Link to="/CustomerDashboard#footer">About</Link>
          </li>
          <li>
            <Link to="/Login">LogOut</Link>
          </li>
        </ul>
        <div className="search-cart">
          <input
            type="text"
            placeholder="Search for items..."
            className="search-bar"
                value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="icons">
            <Link to={"/Cart"} className="cart-icon">
              <BsCart3 />
            </Link>
            <span className="count">{cartCount}</span>
          </div>
          
        </div>
        
      </nav>
          {searchTerm && (
        <div className="search-results">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="search-item">
                {product.name} - ₹{product.price}
              </div>
            ))
          ) : (
            <div className="no-results">No products found</div>
          )}
        </div>
      )}
    </div>
    
  );
};

export default Navbar;
