import React from "react";
import groceryItems from "../../ProductsData/ProductsData";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../../Configuration/Configuration";
import "./Postdata.css";

const Postdata = () => {
  const loggedinUser = JSON.parse(localStorage.getItem("LoggedinAdmin"));
  const handleAddToFirebase = async (item) => {
  try {
    await addDoc(collection(db, "Products"), {
      name: item.name || "",
      image: item.image || "",
      description: item.description || "",
      category: item.category || "",
      quantity: item.quantity || "",
      discount: item.discount || "",
      originalPrice: item.originalPrice || "",
      price: item.price ?? 0,
      addedBy: loggedinUser.user.displayName, // Track admin who added
      createdAt: new Date(),
    });
    alert("Added your product");
  } catch (err) {
    console.log(err);
    alert("Error adding product");
  }
};
 const handleEditToFirebase=()=>{
  alert("Only Admin can Edit")
 }
 
  return (
    <div className="dashboard-container">
      <div id="cards-container">
        {groceryItems.map((x, index) => (
          <div className="card" key={index}>
            <div className="display">
              <img src={x.image} alt={x.name} />
              <div className="card-details">
                <b>{x.name}</b>
                <p>{x.description}</p>
                <div className="card-cp">
                  <span className="category">{x.category}</span>

                  <span className="price">Price: ₹{x.price}</span>
                </div>
                <div className="cardbtn">
                  <button
                    className="cardadd"
                    onClick={() => handleAddToFirebase(x)}
                  >
                    Add
                  </button>
                  <button className="cardedit" onClick={()=>handleEditToFirebase()}>Edit</button>
                
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Postdata;
