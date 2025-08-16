import {
  collection,
  doc,
  where,
  getDocs,
  query,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../Configuration/Configuration";
import React, { useEffect, useState } from "react";
// import { updateDoc,arrayRemove } from "firebase/firestore";
import "./MyPosting.css";

const MyPostings = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState([]);
  const loggedinUser = JSON.parse(localStorage.getItem("LoggedinAdmin"));

  const handleDltFromFirebase = async (dltitem) => {
    const refdoc = doc(db, "Products", dltitem.id); // ✅ Capital "P" matches collection name

    try {
      await deleteDoc(refdoc);
      setProducts((prev) => prev.filter((item) => item.id !== dltitem.id));
      alert("Product deleted successfully");
    } catch (err) {
      console.log("Error deleting product:", err);
      alert("Failed to delete product");
    }
  };

  useEffect(() => {
    const fetchingdata = async () => {
      try {
        const q = query(
          collection(db, "Products"),
          where("addedBy", "==", loggedinUser.user.displayName)
        );

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(productsData, "product");

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching admin products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchingdata(); // ✅ Call it here
  }, [loggedinUser.user.displayName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mypostings-container">
      <h2>My Posted Products</h2>
      <div className="cards-container">
        {product.length > 0 ? (
          product.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} width="100" />
              <div className="product-details">
                <h3>{item.name}</h3>

                <p>{item.Discription}</p>
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <hr />
                <button 
                  onClick={() => handleDltFromFirebase(item)}
                  className="carddlt"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default MyPostings;
