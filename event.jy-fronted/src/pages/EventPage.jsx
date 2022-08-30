import React from "react";
import { useParams } from "react-router-dom";
import logoBlack from "../Images/logoWhite.png";
import { Button, User, Modal } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserTie,
  faCamera,
  faMobileAndroid,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";

const EventPage = () => {
  const { id } = useParams();

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className="h-[85vh] ">
      <div className="mx-40 my-10">
        <div className="flex justify-center items-center">
          <div className="flex-col items-center w-7/12 my-5 pr-5">
            <Button auto flat size="sm" rounded className="!bg-dSecondary">
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
            <footer className="">
              <div className="my-5">
                <div className="text-mainBlue font-bold text-lg">
                  <h3>This Event Includes</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="!flex !justify-start !text-textColor"
                    color="primary"
                    auto
                    light
                    size="sm"
                    icon={<FontAwesomeIcon icon={faUserTie} />}
                  >
                    Direct Interaction with the Instructor
                  </Button>
                  <Button
                    className="!flex !justify-start !text-textColor"
                    color="primary"
                    auto
                    light
                    size="sm"
                    icon={<FontAwesomeIcon icon={faMobileAndroid} />}
                  >
                    Access on Mobile and Web
                  </Button>
                  <Button
                    className="!flex !justify-start !text-textColor"
                    color="primary"
                    auto
                    light
                    size="sm"
                    icon={<FontAwesomeIcon icon={faCamera} />}
                  >
                    Session Recording after
                  </Button>
                  <Button
                    className="!flex !justify-start !text-textColor"
                    color="primary"
                    auto
                    light
                    size="sm"
                    icon={<FontAwesomeIcon icon={faClockFour} />}
                  >
                    1 hour Live Session
                  </Button>
                </div>
              </div>
              <div>
                <div className="text-mainBlue font-bold text-lg">
                  <h3>No of Participants</h3>
                </div>
              </div>
            </footer>
          </div>
          <div className="flex justify-center items-center w-5/12 rounded-2xl bg-mainDark h-[50vh] shadow-lg bg-dSecondary">
            <img src={logoBlack} alt="" />
          </div>
        </div>
        <div className="bottom-0 fixed w-full bg-dSecondary mx-[-160px] h-[12.5vh] shadow-lg rounded-t-3xl">
          <div className="flex items-center h-full mx-40 justify-between">
            <div className="flex gap-10">
              <div>
                <div className="text-dTextColor font-MontserratSemiBold text-lg">
                  Date
                </div>
                <div className="text-dTextColor font-MontserratSemiBold text-sm">
                  25 Oct 2022
                </div>
              </div>
              <div>
                <div className="text-dTextColor text-mainBlue font-MontserratSemiBold text-lg">
                  Time
                </div>
                <div className="text-dTextColor font-MontserratSemiBold text-sm">7:30 PM</div>
              </div>
              <div>
                <div className="text-dTextColor font-MontserratSemiBold text-lg">
                  Duration
                </div>
                <div className="text-dTextColor font-MontserratSemiBold text-sm">60 min</div>
              </div>
            </div>
            <div className="gap-10 flex">
              <div className="">
                <div className="text-dTextColor font-MontserratSemiBold text-lg">
                  Price
                </div>
                <div className="text-dTextColor font-MontserratSemiBold text-sm">20 Rs.</div>
              </div>
              <div className="flex items-center">
                <Button
                  auto
                  color="secondary"
                  className="!bg-dSecondary"
                  onClick={handler}
                >
                  <h6 className="m-0 z-[-10]">Subscribe</h6>
                </Button>
              </div>
              <Modal
                className="!p-5"
                closeButton
                preventClose
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
              >
                <div className="mb-5">
                  <div className="text-left font-MontserratSemiBold text-xl">
                    Please confirm
                  </div>
                  <div className="text-left font-MontserratRegular">
                    I wants to subscribe to this event
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button
                    auto
                    className="!text-textColor !bg-white"
                    onClick={closeHandler}
                  >
                    <h6 className="m-0 z-[-10]">Cancel</h6>
                  </Button>
                  <Button auto color="secondary" className="!bg-dSecondary">
                    <h6 className="m-0 z-[-10]">Subscribe</h6>
                  </Button>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
