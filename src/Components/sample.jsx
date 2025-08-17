 // const [categories, setCategories] = useState({});
  // const [beauty,setBeauty]=useState("")
  // console.log(beauty)

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log('Fetched:',res, res.products.length); // should show 30
  //       setCategories(res);
  //     })
  //     .catch((err) => console.error('Fetch error:', err));
  // }, []);











       {/* <h2 className="dashboard-title">Admin Product Dashboard</h2>
      <button onClick={()=>handleBeauty("beauty")}>beauty</button> */
      /* <button>fragrances</button>
      <button>groceries</button>
      <button>furniture</button>
     <div className="product-card">
        {categories.products?.map((x) => (
          <div className="product-item" key={x.id}>
            <img src={x.images[0]} alt={x.title} />
            <h3>{x.title}</h3>
            <p>{x.description}</p>
            <span>${x.price}</span>
            <div className="button-group">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <p className="count-display">
        Showing {categories.products?.length || 0} products
      </p>   */}


  // const [adminEmail,setAdminEmail]=useState('')
  // const [adminName,setAdminName]=useState('')

  // useEffect(()=>{
  //   const storedAdmin=JSON.parse(localStorage.getItem("LoggedinAdmin"))
  //   console.log(storedAdmin)
  //   if(storedAdmin){
  //    const email=storedAdmin.user.email
  //    const name=storedAdmin.user.displayName || "Admin";
  //    setAdminEmail(email)
  //    setAdminName(name)
  //   }
  // },[])

  //   const handleAddToFirebase = async(item)=>{
  //     try{
  //       if (!adminEmail) {
  //         alert("Admin not logged in");

  //         return;
  //       }

  //        const adminDocRef=doc(db,"Admin",LoggedinAdmin.user.displayName)
  //   await setDoc(adminDocRef, {
  //         email: adminEmail,
  //         name: adminName,
  //         role: "Admin",
  //         id: Date.now()
  //       }, { merge: true });

  //     await updateDoc(adminDocRef,{
  //       groceryItems: arrayUnion({
  //           name: item.name,
  //           description: item.description,
  //           price: item.price,
  //           image: item.image,
  //           category: item.category
  //       })
  //     })

  //      alert("stored data")
  //     }catch(err)
  //     {
  //       console.log(err)
  //       alert("failed to stored")
  //     }

  //   }




  //admindashboard
  // const [adminEmail, setAdminEmail] = useState("");
  //   const [adminName, setAdminName] = useState("");
  
  //   useEffect(() => {
  //     const storedAdmin = JSON.parse(localStorage.getItem("LoggedinAdmin"));
  //     if (storedAdmin) {
  //       setAdminEmail(storedAdmin.user.email);
  //       setAdminName(storedAdmin.user.displayName || "Admin");
  //     }
  //   }, []);
  //   const [grocery, setGrocery] = useState({
  //     name: " ",
  //     category: "",
  //     image: "",
  //     description: "",
  //     price: "",
  //   });
  //   const loggedInUser = JSON.parse(localStorage.getItem("LoggedinAdmin"));
  //   console.log(loggedInUser);
  
  //   const handleAddToFirebase =async (item) => {
  //     item.preventDefault();
  
      
  //    const docRef = doc(db, "Admins", loggedInUser.name);
  // console.log(docRef)
  //   }
  // First, create or merge the admin document
  // await setDoc(docRef, {
  //   email: adminEmail,
  //   name: adminName,
  //   role: "Admin",
  //   id: Date.now()
  // }, { merge: true }); // use merge to prevent overwriting existing data
  
  // Then, update groceryItems array
  // await updateDoc(docRef, {
  //   groceryItems: arrayUnion({
  //     name: item.name,
  //     description: item.description,
  //     price: item.price,
  //     image: item.image,
  //     category: item.category,
  //   }),
    
  // });
  // alert("stored")
  //     }catch(err){
  //       console.log(err)
  //     }
  //   };
  // alert("failed")
  import React from 'react'
  
  const sample = () => {
    return (
      <div>
        
      </div>
    )
  }
  
  export default sample
  