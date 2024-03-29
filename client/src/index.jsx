import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Pages
import App from "./App";
import Login from "./pages/login";
import Search from "./pages/search";
import Join from "./pages/join";

import Addbio from "./pages/addbio";
import Addcert from "./pages/addcertification";
import Freelancersignup from "./pages/freelancersignup";
import Clientsignup from "./pages/clientsignup";
import Home from "./pages/clienthome";
import Providerhome from "./pages/providerhome";
import Learn from "./pages/learn";
import Details from "./pages/basicdetails";
import Profile from "./pages/profile";
import Admin from "./pages/admin";
import ClientHome from "./pages/clienthome";
import { PersistGate } from "redux-persist/integration/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup-provider" element={<Freelancersignup />} />
          <Route path="/signup-client" element={<Clientsignup />} />
          <Route path="/" element={<App hide1={{ display: "none" }} />} />
          <Route path="/home" element={<Home hide={{ display: "none" }} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/join" element={<Join />} />
          <Route path="/getting-started/bio" element={<Addbio />} />
          
          <Route path="/providerhome" element={<Providerhome hide={{ display: "none" }} />} />
          <Route path="/clienthome" element={<ClientHome />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/search/:userId" element={<Profile />} />
          <Route path="/basic-details" element={<Details />} />
          <Route path="/getting-started/certification" element={<Addcert />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
