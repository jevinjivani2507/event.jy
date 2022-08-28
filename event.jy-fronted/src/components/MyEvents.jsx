import React from "react";
import MyEventCard from "./MyEventCard";
import { Card, Button, Modal } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className="">
      <div className="mx-40 pt-20 ">
        <h1 className="font-MontserratBold text-2xl text-textColor mb-10">
          My Events
        </h1>
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
      </div>
    </div>
  );
};

export default MyEvents;
