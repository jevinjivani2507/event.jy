import React from "react";
import mainEvent from "../Images/mainEvent.png";
import SearchEvent from "./SearchEvent";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Event = () => {
  return (
    <div className="flex flex-col h-[90vh] -mx-40 px-40">
      <div className="flex h-full">
      {/* <div className="absolute w-[500px] h-[400px] rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-70 top-40 -left-3"></div> */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={mainEvent} alt="" />
        </div>
        
        <div className="w-1/2 flex flex-col justify-center">
          <div className="pl-10">
            <p className="font-MontserratSemiBold my-5 text-textColor">
              SBS MTV The Kpop Show Ticket Package
            </p>
            <h3 className="font-MontserratBold text-textColor">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </h3>
            <div className="flex gap-5 my-5">
              <div className="dropdownMenu flex gap-5">
                <Button
                  auto
                  className="!bg-dPrimary !text-dTextColor !font-MontserratSemiBold z-[0]"
                >
                  Register
                </Button>
                <Button
                  auto
                  bordered
                  color="textColor"
                  className="z-[0] !text-dPrimary !font-MontserratSemiBold"
                >
                  View More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
