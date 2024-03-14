import React from "react";
import { Link } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"
export default function Navbar({hide, hide1, show, userid, hide2}) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand navbar-legal">
          <img
            width="48"
            height="48"
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
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={hide2}
          >
            <BiUserCircle size={25}/>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              {userid}
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

