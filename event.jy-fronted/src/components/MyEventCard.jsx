import React from "react";
import { Card, Button, Modal } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";
import { Link } from "react-router-dom";

const MyEvents = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div className="mb-10">
        <Card isPressable isHoverable className="border-none">
          <div className="flex justify-between items-center h-[6rem] bg-dSecondary px-10 text-dTextColor">
            <div className="flex gap-5">
              <img src={logoBlack} alt="logo" className="w-8 h-8" />
              <div className="flex items-center">Event Name</div>
              <div></div>
            </div>

            <div className="flex">
              <div className="flex items-center text-xs font-bold">7:30 PM, 25 Oct 2022</div>
              <Button
                auto
                color="secondary"
                className="!bg-dSecondary"
                onClick={handler}
              >
                <h6 className="m-0 z-[-10]">Unsubscribe</h6>
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
                  I wants to unsubscribe to this event
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
                  <h6 className="m-0 z-[-10]">Unsubscribe</h6>
                </Button>
              </div>
            </Modal>
          </div>
        </Card>
    </div>
  );
};

export default MyEvents;
