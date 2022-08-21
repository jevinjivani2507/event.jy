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
        <div className="w-1/2 flex justify-center items-center">
          <img src={mainEvent} alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className="pl-10">
            <p className="font-MontserratSemiBold my-5">
              SBS MTV The Kpop Show Ticket Package
            </p>
            <h3 className="font-MontserratBold">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </h3>
            <div className="flex gap-5 my-5">
              <div className="dropdownMenu flex gap-5">
                <Button auto color="primary" font="myFont">
                  <h6 className="m-0 z-[-10]">Buy Now</h6>{" "}
                </Button>
                <Button auto bordered>
                  <h6 className="m-0 z-[-10]">View More</h6>{" "}
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
