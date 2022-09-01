import React from "react";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";
import { Dropdown, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import events from "../JSON/events";

const EventList = () => {
  return (
    <div className="mx-40 py-20 ">
      <div className="flex justify-between">
        <h1 className="font-MontserratBold text-2xl text-textColor">
          Upcoming Events
        </h1>
        <div className="flex gap-5 dropdownMenu">
          <Dropdown>
            <Dropdown.Button className="z-[0]" flat>
              Weekends
            </Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
              <Dropdown.Item key="delete" color="error" withDivider>
                Delete file
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Button className="z-[0]" flat>
              Event Type
            </Dropdown.Button>
            <Dropdown.Menu color="primary" variant="light" aria-label="Actions">
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
              <Dropdown.Item key="delete" color="error" withDivider>
                Delete file
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Button className="z-[0]" flat>
              Category
            </Dropdown.Button>
            <Dropdown.Menu color="primary" variant="light" aria-label="Actions">
              <Dropdown.Item key="new">New file</Dropdown.Item>
              <Dropdown.Item key="copy">Copy link</Dropdown.Item>
              <Dropdown.Item key="edit">Edit file</Dropdown.Item>
              <Dropdown.Item key="delete" color="error" withDivider>
                Delete file
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-7 my-10">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            discription={event.discription}
            image={event.image}
            date={event.date}
            month={event.month}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="EventList">
          <Button auto rounded className="z-[0] !bg-dSecondary">
            View More
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventList;
