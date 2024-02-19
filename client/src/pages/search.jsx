import React from "react";
import Navbar from "../components/Navbar";
import Searchprofile from "../components/searchprofile";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
  const [items, setItems] = useState([]);
  const location = useLocation();
  const data = location.state;
  console.log(data);
  
  useEffect(() => {
    setItems(data);
  }, []);
  return (
    <div className="searchlisting" key="je">
      <Navbar hide1={{ display: "none" }} />
      <div className="search--grid-container">
        <div className="search--left-side">
          <h1 className="filter--heading">Filter By</h1>
          <h2 className="filter--subheading">Location</h2>
          <input className="filter--location"></input>
          <h2 className="filter--subheading">Languages known</h2>
          <input type="radio" className="filter--option"></input>
          <label>English</label>
          <br></br>
          <input type="radio" className="filter--option"></input>
          <label>Tamil</label>
          <br></br>
          <input type="radio" className="filter--option"></input>
          <label>Hindi</label>
          <h2 className="filter--subheading">Practice Areas</h2>
          <input type="checkbox" className="filter--option"></input>
          <label>Criminal Lawyer</label>
          <br></br>
          <input type="checkbox" className="filter--option"></input>
          <label>Family Lawyer</label>
        </div>
        <div className="search--right-side" key="eo">
          {items.map((item) => (
            <Link to={item.username} state={item} className="blah-blah">
              <Searchprofile
                name={item.name}
                summary={item.about}
                location={item.location}
                rating={item.rating}
                profession={item.profession}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
