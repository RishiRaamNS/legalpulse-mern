import React from "react";
import { Link } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signOut
} from "../redux/user/userSlice";
import { useDispatch, } from "react-redux";












export default function Navbar({hide, hide1, show, userid, hide2}) {
  const dispatch = useDispatch();
  const handleSignOut=async()=>{
    try{    
      await fetch("http://localhost:3005/server/auth/signout");
      dispatch(signOut());
    }catch(error){
      console.log(error);
    }
  }
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navbar-legal">
          <img
            width="96"
            height="96"
            src="/legalpulse-icon.svg"
            alt="courthouse"
          />
        </Link>
        <div className="navbar--right-side">
          <Link to="/learn" className="nav-link">
            Learn
          </Link>
          <a className="nav-link">About</a>
          <Link to="/message" className="nav-link nav-linkk" style={show}>
            Message
          </Link>
          <Link to="/login" className="nav-link" style={hide}>
            Login
          </Link>
          <Link to="/join" className="btn btn-primary" style={hide}>
            Sign up
          </Link>

          <button
            type="button"
            class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={hide2}
          >
            Action
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              {userid}
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="/" onClick={handleSignOut}>
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

