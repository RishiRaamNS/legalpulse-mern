import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  signUpStart,
  signUpFailure,
  signUpSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


export default function Clientsignup() {
  const [formData, setFormData] = useState({});
 
  const navigate = useNavigate();
  const dispatch = useDispatch();

   const handleChange = (e) => {
     console.log(formData);
     setFormData({ ...formData, [e.target.id]: e.target.value });
   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("boom");
    try {
      dispatch(signUpStart());
      console.log("boom");
      const res = await fetch(
        "http://localhost:3005/server/auth/client-signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log(data);
      
      if (data.success === false) {
        dispatch(signUpFailure());
        return;
      }
      dispatch(signUpSuccess(data))
    } catch (error) {
      dispatch(signUpFailure(error));
    }
  };




  return (
    <div className="Signup">
      <div className="login--flex-wrapper">
        <div className="login--left-container">
          <img src="/login.svg" className="login--hero-img" />
        </div>
        <div className="login--right-container">
          <div className="Container login--right-container">
            <h1 className="container--heading">Sign up</h1>

            <p className="para">Enter your details to get started</p>
            <form onSubmit={handleSubmit}>
              <input type="email"  id="email"  className="input first-input"  onChange={handleChange} />
              <span className="floating-label floating-label-1">Email</span>
              <input type="password"  id="password"   className="input second-input" onChange={handleChange}/>
              <span className="floating-label floating-label-2">Password</span>
              <p className="left-align">Have trouble sigining in?</p>
              <button>bla</button>
            </form>

            <p className="container--footer-text">
              Already have an account?
              <Link to="/login" className="container--footer-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
