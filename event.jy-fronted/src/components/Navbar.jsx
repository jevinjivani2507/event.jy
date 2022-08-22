import React, { useState, useEffect } from "react";
import logoWhite from "../Images/logoWhite.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[8vh] bg-mainBlue shadow-lg text-white z-[10]" >
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logoWhite} alt="" />
        </Link>
        <h4 className="m-0 font-MontserratSemiBold">Navbar</h4>
      </div>
    </nav>
  )
}

export default Navbar
