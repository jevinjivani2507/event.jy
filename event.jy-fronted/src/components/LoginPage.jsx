import React from "react";
import { Button, Input } from "@nextui-org/react"
import axios from "axios";


const LoginPage = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:4000/login", {
            username,
            password
        });
        console.log(response);
    }

    const google = () => {
      window.open("http://localhost:4000/auth/google", "_self");
    }


  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="input-container text-black">
          <label>Email</label>
          <Input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}></Input>
        </div>
        <div className="input-container  text-black">
          <label>Password </label>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        </div>
        <div className="button-container">
          {/* <input type="submit" /> */}
        </div>
        <Button type="submit" >Submit</Button>
      </form>
      <div>
        <Button type="submit" onClick={google}>Google</Button>
      </div>
    </div>
  );
};

export default LoginPage;
