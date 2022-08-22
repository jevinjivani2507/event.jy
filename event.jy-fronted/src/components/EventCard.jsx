import React from "react";
import { Link } from "react-router-dom";
import { Card, Modal } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";

const EventCard = () => {
  const i = 2;
  return (
    <div className="w-full">
      <Link to={`event/${i}`}>
        <Card isPressable isHoverable variant="bordered">
          <div className="flex h-[25vh] items-center bg-violet-500">
            <div className="max-h-full rounded-t-xl">
              <img src={logoBlack} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center h-[18vh]">
            <div className="w-2/12 text-center h-full flex items-center">
              <div>
                <span className="font-MontserratBold text-sm  text-mainBlue"> Month </span> <span className="text-sm font-MontserratSemiBold">Date</span> 
              </div>
            </div>
            <div className="w-10/12 p-4">
              <div className="pb-2 font-MontserratBold  text-mainBlue">
                Wonder Girls 2010 Wonder Girls World Tour San Francisco
              </div>
              <div className="text-xs font-MontserratRegular text-[#888888]">
                We’ll get you directly seated and inside for you to enjoy the
                show.
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default EventCard;
