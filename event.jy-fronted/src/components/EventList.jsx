import React from "react";
import EventCard from "./EventCard";
import { Dropdown, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const EventList = () => {
  return (
    <div className="mx-10 py-20 ">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Upcoming Events</h1>
        <div className="flex gap-5 dropdownMenu">
          <Dropdown>
            <Dropdown.Button color="primary" flat textColor="secondary">
              Weekends
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
            <Dropdown.Button flat>Event Type</Dropdown.Button>
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
            <Dropdown.Button flat>Category</Dropdown.Button>
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
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <div className="flex justify-center">
        <Button auto rounded>
          <h6 className="m-0 z-[-10]">View More</h6>{" "}
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default EventList;
