import React, { useState, useEffect } from "react";
import logoWhite from "../Images/logoWhite.png";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <nav className="top-0 sticky h-[8vh] bg-dPrimary shadow-lg text-white z-[10]">
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logoWhite} alt="" />
        </Link>
        <div className="flex">
          <Link to="/MyEvents">
            <Button
              className="font-MontserratSemiBold text-white"
              color="tertiary"
              variant="contained"
              auto
            >
              My Events
            </Button>
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
      </div>
    </nav>
  );
};

export default Navbar;
