import React from 'react';
import EventCard from './EventCard';

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
        <div className="flex flex-wrap justify-between my-10">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </div>
  )
}

export default EventList;