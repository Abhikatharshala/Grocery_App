import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../Configuration/Configuration";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, password, role } = signup;
    try {
      const loggedInUser = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(loggedInUser.user, {
        displayName: signup.name,
      });

      await setDoc(doc(db, `${signup.role}s`, signup.name), {
        name: signup.name,
        role: signup.role,
        email: signup.email,
      });

      alert("Signed up successfully!");
      navigate("/Login");
    } catch (err) {
      console.error(err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-page">
        <form onSubmit={handleSignup} height={"600px"}>
          <div className="signuplogo">
            <b>SignUp</b>
            <p className="one">One Account. Infinite Groceries.</p>
            <p>Sign up. Stock up. Save more.</p>
          </div>

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={(e) =>
              setsignup({ ...signup, [e.target.name]: e.target.value })
            }
            required
          />

          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={(e) =>
              setsignup({ ...signup, [e.target.name]: e.target.value })
            }
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={(e) =>
              setsignup({ ...signup, [e.target.name]: e.target.value })
            }
            required
          />

          <label>Role</label>
          <select
            name="role"
            onChange={(e) =>
              setsignup({ ...signup, [e.target.name]: e.target.value })
            }
            required
          >
            <option value="">Choose your Role</option>
            <option value="Admin">Admin</option>
            <option value="Customer">Customer</option>
          </select>
          <button type="submit" className="signup-button">Sign Up</button>
          <p className="login-link">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        
        </form>
      
    </div>
  );
};

export default Signup;
