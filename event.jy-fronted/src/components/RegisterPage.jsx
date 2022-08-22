import React from "react";
import { Button, Input } from "@nextui-org/react"
import axios from "axios";


const RegisterPage = () => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axios.post("http://localhost:4000/register", {
            username,
            password
        });
        response.status === 200 ? console.log("success") : console.log("error");
        console.log(response.data); 
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
    </div>
  );
};

export default RegisterPage;
