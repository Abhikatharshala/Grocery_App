import React, { useEffect, useState } from "react";
import { db } from "../../Configuration/Configuration"
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import "./cart.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Cart = () => {
  const navigate=useNavigate()
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const displayName = JSON.parse(localStorage.getItem("LoggedinCoustmer"))?.user?.displayName;

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const cartRef = collection(db, "cart", displayName, "items");
      const snapshot = await getDocs(cartRef);
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCartItems(items);

      const total = items.reduce((sum, item) => sum + item.price * item.count, 0);
      setTotalPrice(total);
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  const updateQuantity = async (item, delta) => {
    const newCount = item.count + delta;
    if (newCount <= 0) {
      await deleteItem(item.id);
      return;
    }

    const itemRef = doc(db, "cart", displayName, "items", item.id);
    await updateDoc(itemRef, { count: newCount });
    fetchCartItems(); // Refresh
  };

  const deleteItem = async (id) => {
    const itemRef = doc(db, "cart", displayName, "items", id);
    await deleteDoc(itemRef);
    fetchCartItems(); // Refresh
  };

  const handleCheckout = () => {
  navigate('/Checkout')
    
    alert("Checkout successful! (you can integrate payment here)");
    // You can also clear the cart from Firebase here if needed
  };

  return (
   
    
<div>
 <Navbar/>
    <div className="cart-container">
  <h2 className="cart-heading">Your Cart</h2>
  {cartItems.length === 0 ? (
    <p>No items in cart.</p>
  ) : (
    <table className="cart-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price (₹)</th>
          <th>Quantity</th>
          <th>Total (₹)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td className="quantity-buttons">
              <button onClick={() => updateQuantity(item, -1)}>-</button>
              <span>{item.count}</span>
              <button onClick={() => updateQuantity(item, 1)}>+</button>
            </td>
            <td>₹{item.price * item.count}</td>
            <td>
              <button
                className="remove-button"
                onClick={() => deleteItem(item.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}

  {cartItems.length > 0 && (
    <div className="cart-total">
      <h3>Total: ₹{totalPrice}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  )}
</div>
</div>
  );
};

export default Cart;
