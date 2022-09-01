import React from "react";
import mainEvent from "../Images/mainEvent.png";
import { Link } from "react-router-dom";
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
          <div className="pr-40">
            <p className="font-MontserratSemiBold my-5 text-textColor">
              SBS MTV The Kpop Show Ticket Package
            </p>
            <h3 className="font-MontserratBold text-textColor">
              We’ll get you directly seated and inside for you to enjoy the
              show.
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
