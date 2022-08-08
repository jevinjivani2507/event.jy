import React from "react";
import EventCard from "./EventCard";

const EventList = () => {
  return (
    <div className="mx-10 py-20 ">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Upcoming Events</h1>
        <div className="flex gap-5">
          <h1>Weekends</h1>
          <h1>Event Type</h1>
          <h1>Category</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 my-10">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-blue-500 hover:bg-blue-700 hover:text-white hover:border-blue-700 text-blue-500 font-bold py-2 px-4 rounded-full">
          View More
        </button>
      </div>
    </div>
  );
};

export default EventList;
