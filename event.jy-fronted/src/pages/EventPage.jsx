import React from "react";
import { useParams } from "react-router-dom";
import logoBlack from "../Images/logoWhite.png";
import { Button, User } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faCamera, faMobileAndroid, faClockFour } from "@fortawesome/free-solid-svg-icons";

const EventPage = () => {
  const { id } = useParams();
  return (
    <div className="mx-40 my-10 ">
      <div className="flex justify-center items-center">
        <div className="flex-col items-center w-7/12 my-5 pr-5">
          <Button auto flat size="sm" rounded>
            Technology
          </Button>
          <header className="font-MontserratSemiBold">
            <h2>Wonder Girls 2010 Wonder Girls World Tour San Francisco</h2>
          </header>
          <User
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            name="Ariana Wattson"
            description="UI/UX Designer @Github"
          />
          <div className="font-MontserratRegular">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              repudiandae sint architecto deleniti fugiat porro hic praesentium
              nihil temporibus distinctio? Laudantium quam repellat voluptas,
              nihil sequi veritatis quidem deleniti deserunt!
          </div>
          <footer className="mt-5">
            <div className="text-mainBlue font-bold text-lg">
              <h3>This Event Includes</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button
                className="!flex !justify-start"
                color="primary"
                auto
                light
                size="sm"
                icon={<FontAwesomeIcon icon={faUserTie} />}
              >
                Direct interaction with the instructor
              </Button>
              <Button
                className="!flex !justify-start"
                color="primary"
                auto
                light
                size="sm"
                icon={<FontAwesomeIcon icon={faMobileAndroid} />}
              >
                Access on mobile and web
              </Button>
              <Button
                className="!flex !justify-start"
                color="primary"
                auto
                light
                size="sm"
                icon={<FontAwesomeIcon icon={faCamera} />}
              >
                Session recording after
              </Button>
              <Button
                className="!flex !justify-start"
                color="primary"
                auto
                light
                size="sm"
                icon={<FontAwesomeIcon icon={faClockFour} />}
              >
                1 hour live session
              </Button>
            </div>
          </footer>
        </div>
        <div className="flex justify-center items-center w-5/12 rounded-2xl bg-mainDark h-[50vh] shadow-lg">
          <img src={logoBlack} alt="" />
        </div>
      </div>
      <div className="bottom-0 fixed w-full bg-gray-100 mx-[-160px] h-[12.5vh] shadow-lg rounded-t-3xl">
        <div className="flex items-center h-full mx-40 justify-between">
          <div className="flex gap-10">
            <div>
              <div className="text-mainBlue font-MontserratSemiBold text-lg">Date</div>
              <div className="font-MontserratSemiBold text-sm">25 Oct 2022</div>
            </div>
            <div>
              <div className="text-mainBlue font-MontserratSemiBold text-lg">Time</div>
              <div className="font-MontserratSemiBold text-sm">7:30 PM</div>
            </div>
            <div>
              <div className="text-mainBlue font-MontserratSemiBold text-lg">Duration</div>
              <div className="font-MontserratSemiBold text-sm">60 min</div>
            </div>
          </div>
          <div className="gap-10 flex">
            <div className="">
              <div className="text-mainBlue font-MontserratSemiBold text-lg">Price</div>
              <div className="font-MontserratSemiBold text-sm">20 Rs.</div>
            </div>
            <div className="flex items-center">
              <Button auto color="primary">
                <h6 className="m-0 z-[-10]">Subscribe</h6>{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
