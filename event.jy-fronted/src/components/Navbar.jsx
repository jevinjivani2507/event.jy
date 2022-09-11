import React, { useState, useEffect } from "react";
import logoWhite from "../Images/logoWhite.png";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === "/login" || location.pathname === "/register")
    return null;

    async function handleSubmit(e){
      e.preventDefault();
      const response = await axios.get("http://localhost:4000/auth/logout");

      if(response.data){
        Cookies.remove("user");
        navigate("/login");
      }
    }

  return (
    <nav className="top-0 sticky h-[8vh] bg-dPrimary shadow-lg text-white z-[10]">
      <div className="flex justify-between items-center h-full px-40">
        <Link to="/">
          <img className="h-8" src={logoWhite} alt="" />
        </Link>
        <div className="flex">
          <Link to="/InsertEvent">
            <Button
              className="font-MontserratSemiBold text-white"
              color="tertiary"
              variant="contained"
              auto
            >
              InsertEvent
            </Button>
          </Link>
          <Link to="/club">
            <Button
              className="font-MontserratSemiBold text-white"
              color="tertiary"
              variant="contained"
              auto
            >
              Club
            </Button>
          </Link>
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
          {/* <Link to="/login"> */}
            <Button
              className="font-MontserratSemiBold text-white"
              color="tertiary"
              variant="contained"
              auto
              onClick={handleSubmit}
            >
              Logout
            </Button>
          {/* </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
