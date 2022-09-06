import React, { useState, useEffect } from "react";
import { Button, Input, Modal } from "@nextui-org/react";
import axios from "axios";
import loginGIF from "../Images/loginGIF.gif";
import Google from "../Images/Google.svg";

import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { USER } from "../Redux/ActionTypes";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.username.user);

  console.log(user);

  dispatch({ type: USER, payload: "Rahul" });
  dispatch({ type: USER, payload: "Sita" });

  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const [errorInOTP, setErrorInOTP] = React.useState(false);
  // const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/login", {
      username,
      password,
    });
    console.log(response);
    if (response.data) {
      navigate("/");
    } else {
      toast.error("Invalid Credentials!!");
      window.location.reload(false);
    }
  }

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const [otp, setOtp] = React.useState("");
  function handleOtpChange(otp) {
    setOtp(otp);
    // if(otp.length === 6){
    // const response = await axios.post("http://localhost:4000/verifyOTP",{
    //   otp
    // });
    // console.log(response);
  }

  useEffect(() => {
    if (otp.length === 6) {
      // verifyOTP();
      const response = axios.post("http://localhost:4000/verifyOTP", {
        otp,
      });
      console.log(response);
    }
  }, [otp]);

  return (
    <div className="flex h-screen">
      <div className="flex justify-center items-center w-5/12">
        <img className="h-[75%]" src={loginGIF} alt="" />
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
          <div className="w-full flex justify-center items-center">
            <hr className="line" /> <span>Or</span> <hr className="line" />
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
                </div>
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
