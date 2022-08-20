import React from "react";
import { Button, Input } from "@nextui-org/react"

const LoginPage = () => {
  return (
    <div className="">
      <form>
        <div className="input-container text-black">
          <label>Email</label>
          <Input></Input>
        </div>
        <div className="input-container  text-black">
          <label>Password </label>
          <Input type="password"></Input>
        </div>
        <div className="button-container">
          {/* <input type="submit" /> */}
        </div>
        <Button type="submit" >Submit</Button>
      </form>
    </div>
  );
};

export default LoginPage;
