import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function DropDown(){
 return (<div className="dropdown">
              <a
                className="btn btn-light dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select your state
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item"  href="#">
                    Tamilnadu
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Kerala
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                   Karnataka
                  </a>
                </li>
              </ul>
            </div>)
}



export default function Freelancersignup() {
   const [formData, setFormData] = useState({});
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
     console.log(formData);
     setFormData({ ...formData, [e.target.id]: e.target.value });

     console.log(JSON.stringify(formData));
   };

   const handleSubmit = async (e) => {
     e.preventDefault();
     console.log("boom");
     try {
       console.log("boom");
       const res = await fetch(
         "http://localhost:3005/server/auth/freelance-signup",
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
       setLoading(false);
       if (data.success === false) {
         setError(true);
         return;
       }
       setError(false);
     } catch (error) {
       setLoading(false);
       setError(true);
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
              <input
                type="email"
                className="input first-input"
                id="email"
                onChange={handleChange}
              ></input>
              <span className="floating-label floating-label-1">Email</span>
              <input
                className="input second-input"
                type="text"
                id="name"
                onChange={handleChange}
              ></input>
              <span className="floating-label floating-label-2">Full Name</span>
              <input
                type="password"
                className="input third-input"
                id="password"
                onChange={handleChange}
              ></input>
              <span className="floating-label floating-label-3">Password</span>
              {/* <DropDown /> */}

              <label htmlFor="state">State of Operation</label>

              <select
                name="State-of-operation"
                id="state"
                onChange={handleChange}
              >
                <option value="Nil">All States</option>
                <option value="Kerala">Kerala</option>
                <option value="TamilNadu">TamilNadu</option>
              </select>

              <button className="flsbutton">SignUP</button>

              {/* <Link
              to="/getting-started/role"
              className="btn btn-primary container--btn"
            >
              Sign up
            </Link> */}
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
