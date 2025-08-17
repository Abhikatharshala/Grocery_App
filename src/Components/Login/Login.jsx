import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Configuration/Configuration";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password, role } = Login;
    try {
      const logginusers = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert("loggedin sucessfully");

      if (role === "Admin") {
        localStorage.setItem("LoggedinAdmin", JSON.stringify(logginusers));
      } else {
        localStorage.setItem("LoggedinCoustmer", JSON.stringify(logginusers));
      }
      navigate(`/${role}Dashboard`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
        <form onSubmit={handleLogin} className="form">
          <fieldset>
            <legend>Login</legend>
             <div className="signuplogo">
            <p className="one">Login Once. Enjoy Endless Savings.</p>
            <p>Join Now. Shop Smarter Every Day."</p>
  
          </div>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              onChange={(e) =>
                setLogin({ ...Login, [e.target.name]: e.target.value })
              }
            />

            <label>password</label>
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
              onChange={(e) =>
                setLogin({ ...Login, [e.target.name]: e.target.value })
              }
            />
            <label>role</label>
            <select
              id="role"
              name="role"
              required
              onChange={(e) =>
                setLogin({ ...Login, [e.target.name]: e.target.value })
              }
            >
              <option value="">choose your role</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
            </select>

            <button type="submit" className="login-button">
              Login
            </button>
            <p className="SignUp-link">
            New User Please? <Link to="/Signup">SignUp</Link>
          </p>
          </fieldset>
        </form>
    </div>
  );
};

export default Login;
