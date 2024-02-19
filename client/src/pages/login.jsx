import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3005/server/auth/gen-signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      setError(false);
      if (data.typeofuser === "Client") {
        navigate("/clienthome");
      } else if (data.typeofuser === "Provider") {
        navigate("/providerhome");
      } else {
      }
    } catch (error) {
      setLoading(false);
      setError(true);
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
                name="user-selection"
                id="typeofuser"
                onChange={handleChange}
              >
                <option>user</option>

                <option value="Client">Client</option>
                <option value="Provider">Provider</option>
              </select>
              <p className="left-align">Have trouble sigining in?</p>
              <button>signin</button>
              {/* <Link to="/home" className="btn btn-primary container--btn">
                  <button>Log In</button>
                </Link> */}
            </form>

            {/* <div className="btn-wrapper">
        <img src="/google.svg" className="google-icon" />
        <Link href="/" className="btn container--btn-2">Continue with google</Link>
          </div> */}
            <p className="container--footer-text">
              Don't have an account?
              <a className="container--footer-link">Signup</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
