import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Home({ hide }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  function searching(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3005/lawyers/find", { value })
      .then((response) => {
        navigate("/search", {state: response.data });
      });
  }
  return (
    <div className="home">
      <Navbar hide={hide} show={{ display: "inline" }} />
      <div className="home-flex">
        <div className="home-left">
          <h1 className="home-heading">
            Welcome! Let's hire your first Legal Service Provider
          </h1>
          <p className="home-paragraph">
            It's the fastest way to access quality legal help in India
          </p>
          <form>
            <input
              className="home-search"
              type="text"
              value={value}
              placeholder="Search for providers"
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <FiSearch className="home-searchicon" />
            <button
              className="btn btn-primary home-searchbtn"
              onClick={searching}
            >
              Search
            </button>
          </form>
        </div>
        <div className="home-right">
          <img
            src="/home-image.svg"
            alt="illustration"
            className="home-image"
          />
          <img src="/home-blob.svg" className="home-blob" />
        </div>
      </div>
    </div>
  );
}
