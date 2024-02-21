import Getstartbottomnav from "../components/Getstartbottomnav";
import Getstartnavbar from "../components/Getstartnavbar";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
export default function Addcert() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    setTimeout(() => {
      navigate("/login")
    }, 1000);
  };
  return (
    <div className="Addcert">
      <Getstartnavbar />
      <div className="content">
        <h1 className="heading">Do you have certifications?</h1>
        <p>
          Adding certifications to your profile is a geat way to show clients
          what you can do.
        </p>
      </div>
      <div>
        <div className="add-experience">
          <form
            action="http://localhost:3005/api/upload"
            method="post"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <div className="file-input-wrapper">
              <input type="file" name="cert" className="file-input" />
              <input
                type="submit"
                value="submit"
                className="file-input-submit"
              />
            </div>
          </form>
        </div>
        <div className="check-box-div">
          <label className="checkbox">
            <input type="checkbox" className="check-box" />
            Nothing to add? Check the box and keep going
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
