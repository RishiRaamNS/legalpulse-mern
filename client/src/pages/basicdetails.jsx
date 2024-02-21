import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function basicdetails() {
  const [lawyer, setLawyer] = useState({
    name: String,
    username: String,
    location: String,
    experience: Number,
    languages: Object,
    specialize: String,
    courts: Array,
    email: String,
    mobile: Number,
    enrolmentid: Number,
    profession: String,
    practiceareas: Array,
    about: String,
    rating: Number,
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("#my-form"));
    axios.post("http://localhost:3005/lawyers/add", lawyer);
    navigate("/getting-started/certification");
  };
  const onChangeHandler = (event) => {
    const { name, value } = event;
    setLawyer((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const onChangeHandlerCourt = (e) => {
    const data = e.value;
    const arr = data.split(","); //we are splitting the absolute shit of values entered in input field using the comma and then converting the whole mess of string into arrays of different values seperated by commas
    setLawyer((prev) => {
      return { ...prev, courts: arr }; //inserting the new array as value of courts
    });
  };
  const onChangeHandlerPracticeareas = (e) => {
    const data = e.value;
    const arr = data.split(",");
    setLawyer((prev) => {
      return { ...prev, practiceareas: arr };
    });
  };
  const handleCheckChange1 = (e) => {
    const data1 = e.target.name;
    const lawyerlist = [...Object.values(lawyer.languages)];
    lawyerlist.push(data1);
    setLawyer((prev) => {
      return { ...prev, languages: lawyerlist };
    });
    console.log(typeof { lawyerlist });
  };
  const handleCheckChange2 = (e) => {
    const data2 = e.target.name;
    const lawyerlist = [...Object.values(lawyer.languages)];
    lawyerlist.push(data2);
    setLawyer((prev) => {
      return { ...prev, languages: lawyerlist };
    });
  };
  const handleCheckChange3 = (e) => {
    const data3 = e.target.name;
    const lawyerlist = [...Object.values(lawyer.languages)];
    lawyerlist.push(data3);
    setLawyer((prev) => {
      return { ...prev, languages: lawyerlist };
    });
  };

  return (
    <div className="admin">
      <h1>Enter your details</h1>
      <div className="admin--form-group">
        <form id="my-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your name"
              defaultValue={lawyer.name}
              name="name"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Please choose a username"
                aria-describedby="inputGroupPrepend"
                defaultValue={lawyer.username}
                name="username"
                onChange={(e) => onChangeHandler(e.target)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              defaultValue={lawyer.location}
              name="location"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Experience</label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Your experience"
              defaultValue={lawyer.experience}
              name="experience"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <p className="form-label">Languages</p>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="English"
              onChange={handleCheckChange1}
            />
            <label className="form-check-label">English</label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              name="Tamil"
              onChange={handleCheckChange2}
            />
            <label className="form-check-label">Tamil</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="Hindi"
              onChange={handleCheckChange3}
            />
            <label className="form-check-label">Hindi</label>
          </div>
          <div className="mb-3">
            <label className="form-label">Specialization</label>
            <input
              type="text"
              className="form-control"
              placeholder="What are you specialized for?"
              defaultValue={lawyer.specialize}
              name="specialize"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Courts</label>
            <input
              type="text"
              className="form-control"
              placeholder="What courts do you work in?"
              defaultValue={lawyer.courts}
              name="courts"
              onChange={(e) => onChangeHandlerCourt(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              defaultValue={lawyer.email}
              name="email"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Your mobile number"
              defaultValue={lawyer.mobile}
              name="mobile"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enrolment ID</label>
            <input
              type="number"
              className="form-control"
              placeholder="Your enrolment id"
              defaultValue={lawyer.enrolmentid}
              name="enrolmentid"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Profession</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your profession"
              defaultValue={lawyer.profession}
              name="profession"
              onChange={(e) => onChangeHandler(e.target)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Practice Areas</label>
            <input
              type="text"
              className="form-control"
              placeholder="Your practice areas"
              defaultValue={lawyer.practiceareas}
              name="practiceareas"
              onChange={(e) => onChangeHandlerPracticeareas(e.target)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Add bio
            </label>
            <textarea
              className="form-control"
              rows="4"
              defaultValue={lawyer.about}
              name="about"
              onChange={(e) => onChangeHandler(e.target)}
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
}
