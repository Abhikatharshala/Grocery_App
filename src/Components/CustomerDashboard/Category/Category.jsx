import React, { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Category.css";
import { collection, doc, getDoc, getDocs, query, setDoc } from "firebase/firestore";
import { db } from "../../Configuration/Configuration";
import { Link } from "react-router-dom";

const Categories = () => {
  // const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("");

  // Scroll Buttons
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Fetch products from Firebase
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const loggedinUser = JSON.parse(
          localStorage.getItem("LoggedinCoustmer")
        );
        const displayName = loggedinUser?.user?.displayName;
      

        if (!displayName) {
          console.warn("Logged-in user is not valid");
          return;
        }

        const q = query(collection(db, "Products"));
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(productsData, "product");

        setAllProducts(productsData);
        setFilteredProducts(productsData);
  

      } catch (error) {
        console.error("Error fetching data:", error.message);

      }
    };

    fetchingData();
  }, []);

  // Filter products on category change
  const setSelectedCategory = (category) => {
    const filtered = allProducts.filter((prod) => prod.category === category);
    setFilteredProducts(filtered);
  };

  const handleAll = () => {
    setFilteredProducts(allProducts);
  };


  // products adding to cart logic

  const handleAddCart = async (prod) => {
    const loggeduser = JSON.parse(localStorage.getItem("LoggedinCoustmer"));
    const dispalyName = loggeduser?.user?.displayName || "guest";
    console.log(dispalyName, "cart loggineed user");
    if(!dispalyName){
      alert("you'r not logged in yet")
      return;
    }

  const refdoc=doc(db,"cart",dispalyName,"items",prod.id)
  console.log("refdoc",refdoc)


  const getdata=await getDoc(refdoc)
  console.log(getdata,"getdataa")

  try{
if(getdata.exists()){
  const currentcount=getdata.data().count || 1;
  await setDoc(refdoc,{
 ...prod,
 count:currentcount+1
  })
}else{setDoc(refdoc,{...prod,
  count:1
})}
// console.log(prod,"product")
alert(`${prod.name},Added to your cart`)
}catch (error) {
    console.error("Error adding to cart:", error);
  }
};


  return (
    <>
      <div className="categories" id="Category">
        <button  className="scroll-button left" onClick={scrollLeft} >
          &lt;
        </button>

        <div className="allitems" ref={scrollContainerRef}>
          {/* All Items Button */}
          <button
            className="image-text-link category-button"
            onClick={handleAll}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/local-market-farmer-vegetables-shop-stall-farmers-cartoon-characters-vector-72342777.jpg"
              alt="All Items"
            />
            <span>All Items</span>
          </button>

          {/* Vegetables */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("vegetables")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/fresh-vegetables-frame-wooden-table-199064516.jpg"
              alt="Vegetables"
            />
            <span>Vegetables</span>
          </button>

          {/* Fruits */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("fruits")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/assorted-fruits-white-background-140287808.jpg"
              alt="Fruits"
            />
            <span>Fruits</span>
          </button>

          {/* Plants & Seeds */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("seeds-plants")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/gardening-tools-seedlings-pots-white-background-39375741.jpg"
              alt="Plants & Seeds"
            />
            <span>Plants & Seeds</span>
          </button>

          {/* Flowers & Bouquets */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("flowers-bouquets-leaves")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/colorful-flower-bouquet-white-background-33853639.jpg"
              alt="Flowers & Bouquets"
            />
            <span>Flowers & Bouquets</span>
          </button>

          {/* Tablets */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("tablets")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/tablet-pc-isolated-white-background-30308926.jpg"
              alt="Tablets"
            />
            <span>Tablets</span>
          </button>

          {/* Headphones */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("headphones")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/wireless-headphones-isolated-white-background-40103908.jpg"
              alt="Headphones"
            />
            <span>Headphones</span>
          </button>

          {/* Speakers */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("speakers")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/bluetooth-speaker-white-background-46632390.jpg"
              alt="Speakers"
            />
            <span>Speakers</span>
          </button>

          {/* Smart Watches */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("smartWatches")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/smart-watch-isolated-white-background-47026856.jpg"
              alt="Smart Watches"
            />
            <span>Smart Watches</span>
          </button>

          {/* Kitchen Appliances */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("kitchenAppliances")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/kitchen-appliances-set-isolated-white-background-126668634.jpg"
              alt="Kitchen Appliances"
            />
            <span>Kitchen Appliances</span>
          </button>

          {/* Home Appliances */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("homeAppliances")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/home-appliances-set-isolated-white-background-130735158.jpg"
              alt="Home Appliances"
            />
            <span>Home Appliances</span>
          </button>

          {/* Toys */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("toys")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/colorful-toy-cubes-white-background-21533572.jpg"
              alt="Toys"
            />
            <span>Toys</span>
          </button>

          {/* Jewellery */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("jewellery")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/jewelry-white-background-14092501.jpg"
              alt="Jewellery"
            />
            <span>Jewellery</span>
          </button>

          {/* Accessories */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("accessories")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/fashion-accessories-white-background-28297100.jpg"
              alt="Accessories"
            />
            <span>Accessories</span>
          </button>

          {/* Spices */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("masala")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/assorted-indian-spices-white-background-34825299.jpg"
              alt="Spices"
            />
            <span>Spices</span>
          </button>

          {/* Dry Fruits */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("dryfruits")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/dry-fruits-white-background-23051538.jpg"
              alt="Dry Fruits"
            />
            <span>Dry Fruits</span>
          </button>

          {/* Chocolates */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("chocolates")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/assorted-chocolates-white-background-19510936.jpg"
              alt="Chocolates"
            />
            <span>Chocolates</span>
          </button>

          {/* Eyewear */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("spectacles")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/eyeglasses-white-background-26472722.jpg"
              alt="Eyewear"
            />
            <span>Eyewear</span>
          </button>

          {/* Watches */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("watches")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/wrist-watch-isolated-white-background-36727100.jpg"
              alt="Watches"
            />
            <span>Watches</span>
          </button>

          {/* Ice Cream */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("ice-cream")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/ice-cream-cone-white-background-31253107.jpg"
              alt="Ice Cream"
            />
            <span>Ice Cream</span>
          </button>

          {/* Snacks */}
          <button
            className="image-text-link category-button"
            onClick={() => setSelectedCategory("snacks")}
          >
            <img
              className="image-link"
              src="https://thumbs.dreamstime.com/b/assorted-snacks-white-background-16884119.jpg"
              alt="Snacks"
            />
            <span>Snacks</span>
          </button>
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>

     <div className="product-grid" id="products">
   {filteredProducts.length > 0 ? (
    filteredProducts.map((prod, index) => (
      <div key={index} className="product-card">
        <Link to={`/ProductDetails/${prod.name}`} className="card-link">
          <img src={prod.image} alt={prod.name} className="product-img" />
          <h3 className="product-name">{prod.name}</h3>
          <p className="product-quantity">{prod.quantity}</p>
          <div className="product-pricing">
            <span className="product-price">₹{prod.price}</span>
            {prod.originalPrice && (
              <span className="product-original">₹{prod.originalPrice}</span>
            )}
          </div>
          {prod.discount && <p className="product-discount">{prod.discount}</p>}
        </Link>
        <button className="add-btn" onClick={() => handleAddCart(prod)}>
          ADD
        </button>
      </div>
    ))
  ) : (
    <p className="notfound">Products not found</p>
  )}
</div>

    </>
  );
};

export default Categories;
