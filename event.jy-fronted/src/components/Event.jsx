import React from "react";
import mainEvent from "../Images/mainEvent.png";
import SearchEvent from "./SearchEvent";
import { Button } from "@nextui-org/react";

const Event = () => {
  return (
    <div className="flex flex-col h-[80vh] -mx-40 px-40">
      <div className="flex h-full">
        <div className="w-1/2 flex justify-center items-center">
          <img src={mainEvent} alt="" />
        </div>
        <div className="w-1/2 flex flex-col justify-center">
          <div className=" pl-10">
            <h1 className="font-bold text-4xl my-5">
              SBS MTV The Kpop Show Ticket Package
            </h1>
            <h1 className="text-md">
              Look no further! Our SBS The Show tickets are the simplest way for
              you to experience a live Kpop recording.
            </h1>
            <div className="flex gap-5 my-5">
             
              <Button auto> <h1 className="z-[-10]">Buy Now</h1> </Button>
              <Button auto bordered> <h1 className="z-[-10]">Buy Now</h1> </Button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
