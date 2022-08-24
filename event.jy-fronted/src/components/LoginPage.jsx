import React from "react";
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import loginGIF from "../Images/loginGIF.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faU, faUser } from "@fortawesome/free-solid-svg-icons";
import Google from "../Images/Google.svg";

const LoginPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/login", {
      username,
      password,
    });
    console.log(response);
  }

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <div className="flex h-[92vh]">
      <div className="flex justify-center items-center w-5/12">
        <img className="h-[75%]" src={loginGIF} alt="" />
      </div>
      <div className="w-7/12 flex justify-center items-center bg-mainBlue rounded-l-3xl shadow-2xl">
        <div className="flex flex-col justify-center items-center bg-white w-[50%] p-10 rounded-2xl">
          <div className="my-5">
            <Button.Group className="" color="primary" size="sm" ghost>
              <Button>Login</Button>
              <Button>Register</Button>
            </Button.Group>
          </div>
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
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
