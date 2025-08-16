import { useLocation, useParams } from "react-router-dom";
import groceryItems from "../../ProductsData/ProductsData";
import "./ProductDetails.css";
import { FaCcAmazonPay } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
import { BsCreditCard2FrontFill, BsBank2 } from "react-icons/bs";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { db } from "../../Configuration/Configuration";
import { count, doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";

const ProductDetails = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
    const { pathname } = useLocation();

  // ✅ Scroll to top when navigating to product details
useEffect(() => {
  console.log("Current pathname:", pathname); // debug in console
  if (pathname.toLowerCase().startsWith("/productdetails")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}, [pathname]);


  const product = groceryItems.find(
    (item) => item.name.toLowerCase() === decodedName.toLowerCase()
  );
  const handleAddcart = async () => {
    const loggedinuser = JSON.parse(localStorage.getItem("LoggedinCoustmer"));
    const displayName = loggedinuser?.user?.displayName;
    console.log("displayname", displayName);

    const refdoc = doc(db, "cart", displayName, "items", product.name);
    console.log("refdoc", refdoc);

    const getdata = await getDoc(refdoc);
    console.log(getdata, "getdataa");
try{

    if (getdata.exists()) {
      const currentcount = getdata.data().count || 1;
      await setDoc(refdoc, {
        ...product,
        count: currentcount + 1,
      });
    } else {
      setDoc(refdoc, {
        ...product,
        count: 1,
      });
    }
   
   alert(`${product.name},is added to your cart`);
  
  }catch(error){
    console.log("product not added" ,error)
  }
  }
  return (
    <div className="product-details-page">
      <Navbar />
      {product ? (
        <>
          <div className="product-details-container">
            <div className="product-details-content">
              {/* Left: Image */}
              <div className="product-image-section">
                <img
                  src={product.image}
                  alt={product.name}
                  className="main-image"
                  width="200px"
                  height="200px"
                />
              </div>

              {/* Right: Details */}
              <div className="product-info-section">
                <h2 className="product-title">{product.name}</h2>
                <b className="product-description">{product.description}</b>
                <p className="product-quantity">
                  {`Net Quantity: ${product.quantity}`}
                </p>

                <div className="price-section">
                  <span className="current-price">₹{product.price}</span>
                  <span className="discount">{product.discount}</span>
                </div>

                <button onClick={handleAddcart} className="add-to-cart-btn">
                  Add To Cart
                </button>

                <div className="coupens">
                  <b>
                    <SiPaytm size={22} /> Assured ₹10 - ₹300 Cashback on using
                    Paytm UPI
                  </b>
                  <br />
                  <b>
                    <FaCcAmazonPay size={22} /> Get upto ₹25 Cashback on using
                    Amazon Pay UPI
                  </b>
                  <br />
                  <b>
                    <BsCreditCard2FrontFill size={22} /> Upto ₹300 cashback with
                    CRED
                  </b>
                  <br />
                  <b>
                    <BsBank2 size={22} /> Get flat ₹20 discount with MobiKwik
                    UPI
                  </b>
                  <br />
                </div>
              </div>
            </div>
          </div>

          {/* OUTSIDE FLEX CONTAINER — FULL WIDTH BELOW */}
          <div className="HighLights">
            <h3 className="info-row">HighLights</h3>
            <div className="info-row">
              <span className="label">Brand</span>: <span>Unbranded</span>
            </div>
            <div className="info-row">
              <span className="label">Product Type</span>:{" "}
              <span>{product.name}</span>
            </div>
            <div className="info-row">
              <span className="label">Imported</span>: <span>No</span>
            </div>
            <div className="info-row">
              <span className="label">Weight</span>:{" "}
              <span>{product.quantity}</span>
            </div>

            <div className="information">
              <p>
                <span className="in">Declaration:</span> All images are for
                representational purposes only. It is advised that you read the
                batch and manufacturing details, directions for use, allergen
                information, health and nutritional claims (wherever
                applicable), and other details mentioned on the label before
                consuming the product. For combo items, individual prices can be
                viewed on the page
              </p>
              <p>
                <span className="in">Customer care details: </span>In case of
                any issue, contact us E-mail address: support@GrocerdDash.com
              </p>
              <p>
                <span className="in">Service centre details:</span> Katharashala
                Abhilash Private Limited
              </p>
              <p>
                <span className="in">Seller License No:</span> 11521998000248
              </p>
              <p>
                <span className="in">Country of Origin:</span> India
              </p>
            </div>
            <div>
             
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
      <Footer/>
    </div>
  );
};

export default ProductDetails;
