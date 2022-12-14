import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "@nextui-org/react";
import axios from "axios";
import Google from "../Images/Google.svg";

import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionTypes";
import Cookies from "js-cookie";
import Lottie from "lottie-react";
import rocket from "../Images/rocket.json";

import { useCookies } from "react-cookie";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.username.user);

  const readCookie = () => {
    const uc = Cookies.get("user");
  }


  const [cookies, setCookie] = useCookies(["user"]);

  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // console.log(readCookie);  

  // const [errorInOTP, setErrorInOTP] = React.useState(false);
  // const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/auth/login", {
      username,
      password,
    });


    
    // console.log(response);
    if (response.data) {
      Cookies.set("user","loginTrue");
      console.log(Cookies.get("user"));
      navigate("/");
    } else {
      toast.error("Invalid Credentials!!");
      // window.location.reload(false);
      setPassword("");
      setUsername("");
    }
  }

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <div className="flex h-screen">
      <div className="flex justify-center items-center w-5/12">
        <Lottie animationData={rocket} loop={true} />
      </div>
      <div className="w-7/12 flex justify-center items-center bg-mainBlue rounded-l-3xl shadow-2xl bg-dSecondary">
        <div className="flex flex-col justify-center items-center bg-white w-[50%] p-10 rounded-2xl">
          <div>
            <Button
              auto
              className="!shadow-2xl !bg-white !text-black font-MontserratSemiBold"
              type="submit"
              onClick={google}
            >
              <img className="h-[1.25rem] m-2" src={Google} alt="" />
              Google
            </Button>
          </div>
          <div>
            <form className="" onSubmit={handleSubmit}>
              <div>
                <div className="flex flex-col mb-5">
                  <Input
                    type="text"
                    value={username}
                    className="mb-1"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className="mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="flex justify-end text-xs">Forgot Password?</p>
                </div>
                <Button
                  auto
                  className="!bg-white !text-black font-MontserratRegular"
                  type="submit"
                  onPress={(e) => navigate("/register")}
                >
                  Don't have Account?
                </Button>
                <Button
                  type="submit"
                  className="!bg-dSecondary"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
