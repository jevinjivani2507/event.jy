import React, { useState, useEffect } from "react";
import logoWhite from "../Images/logoWhite.png";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="top-0 sticky h-[8vh] bg-black shadow-lg text-white z-[10]">
=======
    <nav className="top-0 sticky h-[8vh] bg-dPrimary shadow-lg text-white z-[10]">
>>>>>>> 19cc10f0ccef5be2828188b3186a5ac419f34b3b
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logoWhite} alt="" />
        </Link>
        <Link to="/login">
          <Button
            className="font-MontserratSemiBold text-white"
            color="tertiary"
            variant="contained"
            auto
          >
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
