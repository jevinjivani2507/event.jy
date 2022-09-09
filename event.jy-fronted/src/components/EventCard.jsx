import React from "react";
import { Link } from "react-router-dom";
import { Card, Modal } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";
import logoWhite from "../Images/logoWhite.png";

const EventCard = (props) => {
  // const i = 2;
  return (
    <div className="w-full">
      <Link to={`/event/${1 }`}>
        <Card isPressable isHoverable className="border-none">
          <div className="flex h-[25vh] items-center bg-white">
            <div className="max-h-full rounded-t-xl">
              <img src={logoBlack} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center h-[18vh] bg-dSecondary">
            <div className="w-2/12 text-center h-full flex justify-center items-center">
              <div className="flex flex-col justify-center">
                <div className="font-MontserratBold text-sm  text-dTextColor uppercase">
                {props.month.substring(0, 3)}
                </div>
                <div className="text-sm font-MontserratSemiBold text-dTextColor uppercase">
                {props.date}
                </div>
              </div>
            </div>
            <div className="w-10/12 pr-4">
              <div className="pb-2 font-MontserratBold  text-dTextColor">
                {props.title}
              </div>
              <div className="text-xs font-MontserratRegular text-dTextColor">
              {props.discription}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default EventCard;
