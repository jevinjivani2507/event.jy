import React from "react";
import { Card, Text } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";


const EventCard = () => {
  return (
    <div className="w-full">
      <Card isPressable isHoverable variant="bordered" >
        {/* <Card.Body> */}
          <div className="flex justify-between items-center m-0 bg-green-300">
            <img src={logoBlack} alt="" />
          </div>
        {/* </Card.Body> */}
      </Card>
      {/* <div className="h-80 rounded-2xl shadow-lg bg-green-300">
            EventCard
        </div> */}
    </div>
  );
};

export default EventCard;
