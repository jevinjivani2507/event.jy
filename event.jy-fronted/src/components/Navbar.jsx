import React, { useState, useEffect } from "react";
import logoWhite from "../Images/logoWhite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[8vh] bg-[#242565] shadow-lg rounded-b-lg text-white z-[100]" >
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logoWhite} alt="" />
        </Link>
        <h1 className="">Navbar</h1>
      </div>
    </nav>
  )
}

export default Navbar
