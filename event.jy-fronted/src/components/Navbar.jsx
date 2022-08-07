import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[8vh]">
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logo} alt="" />
        </Link>
        <h1 className="">Navbar</h1>
      </div>
    </nav>
  )
}

export default Navbar
