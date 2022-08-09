import React from "react";
import { Card, Text } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";

const EventCard = () => {
  return (
    <div className="w-full">
      <Card isPressable isHoverable variant="bordered">
        <div className="flex h-[25vh] items-center bg-violet-500">
          <div className="max-h-full rounded-t-xl">
            <img src={logoBlack} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center h-[18vh]">
          <div className="w-2/12 text-center h-full flex items-center">
            <div><span className="font-bold"> Month </span> Date</div>
          </div>
          <div className="w-10/12 p-4">
            <div className="pb-2 font-bold">Wonder Girls 2010 Wonder Girls World Tour San Francisco</div>
            <div className="text-xs text-[#888888]">We’ll get you directly seated and inside for you to enjoy the show.</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EventCard;
