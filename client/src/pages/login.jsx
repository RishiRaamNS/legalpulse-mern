import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:3005/server/auth/gen-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        console.log("this is small error"); //this is what happens when user is not found
        dispatch(signInFailure());
        return;
      }
      dispatch(signInSuccess(data));
      if (data.typeofuser === "Client") {
        navigate("/clienthome");
      } else if (data.typeofuser === "Provider") {
        navigate("/providerhome");
      } else {
      }
    } catch (error) {
      console.log("this is totoal error"); // this is more serious
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="Login">
      <div className="login--flex-wrapper">
        <div className="login--left-container">
          <img src="/login.svg" className="login--hero-img" />
        </div>
        <div className="login--right-container">
          <div className="Container login--right-container">
            <h1 className="container--heading">Welcome back</h1>
            <p className="para">Enter your details to get started</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                className="input first-input"
                onChange={handleChange}
              ></input>
              <span className="floating-label floating-label-1">Email</span>
              <input
                type="password"
                id="password"
                className="input second-input"
                onChange={handleChange}
              ></input>
              <span className="floating-label floating-label-2">Password</span>
              <select
                className="container--select"
                name="user-selection"
                id="typeofuser"
                onChange={handleChange}
              >
                <option>user</option>

                <option value="Client">Client</option>
                <option value="Provider">Provider</option>
              </select>

              <button
                className="container--signinbtn btn btn-primary"
              >
                Sign in
              </button>
            </form>

            {/* <div className="btn-wrapper">
        <img src="/google.svg" className="google-icon" />
        <Link href="/" className="btn container--btn-2">Continue with google</Link>
          </div> */}
            <p className="container--footer-text">
              Don't have an account?
              <Link to="/join" className="container--footer-link">Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
