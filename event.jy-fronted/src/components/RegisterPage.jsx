import React, { useEffect } from "react";
import { Button, Input, Modal } from "@nextui-org/react";
import axios from "axios";
import loginGIF from "../Images/loginGIF.gif";
import Google from "../Images/Google.svg";
import OTPInput from "otp-input-react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Lottie from "lottie-react";
import rocket from "../Images/rocket.json";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/auth/register", {
      username,
      password,
    });
    response.status === 200 ? console.log("success") : console.log("error");
    console.log(response.data);
  }

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  const [otp, setOtp] = React.useState("");
  function handleOtpChange(otp) {
    setOtp(otp);
  }



  const otpSubmit = async () => {
    if (otp.length === 6) {
      // verifyOTP();
      const response = await axios.post("http://localhost:4000/auth/verifyOTP", {
        otp,
      });
      // console.log(response);
      if (response.status === 200) {
        // console.log(response);
        navigate("/login");
      }
    }
    // console.log("otpSubmit");
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
          <div className="my-3">
            ------------------------- OR -------------------------
          </div>
          <div>
            <form className="" onSubmit={handleSubmit}>
              <div>
                <div className="flex flex-col mb-5">
                  <Input
                    type="text"
                    placeholder="Name"
                    className=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="text"
                    value={username}
                    className="my-1"
                    placeholder="Email"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    className=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="!bg-dSecondary"
                  onClick={handler}
                >
                  Submit
                </Button>
              </div>
            </form>
            <Modal
              className="!p-5"
              closeButton
              preventClose
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
            >
              <div className="flex flex-col justify-center">
                <div className="font-bold text-2xl">Check your Email...</div>
                <div className="flex justify-center my-2">
                  <OTPInput
                    OTPLength={6}
                    onChange={handleOtpChange}
                    value={otp}
                    className=""
                    inputStyles={{
                      borderColor: "black",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      borderRadius: "5px",
                      width: "2rem",
                      height: "2rem",
                      fontSize: "1rem",
                      textAlign: "center",
                      margin: "0.5rem",
                    }}
                  />
                </div>
                <div className="flex justify-center w-full">
                  <Button
                    type="submit"
                    className="!bg-dSecondary"
                    auto
                    onPress={otpSubmit}
                  >
                    Submit
                  </Button>
                  <ToastContainer />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
