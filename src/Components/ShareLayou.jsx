import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const ShareLayou = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ShareLayou;
