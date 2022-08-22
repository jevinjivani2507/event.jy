import React from "react";
import { Card, Text } from "@nextui-org/react";
import logoBlack from "../Images/logoBlack.png";

const BlogCard = () => {
  return (
    <div className="w-full">
      <Card isPressable isHoverable variant="bordered">
        <div className="flex h-[25vh] items-center bg-violet-500">
          <div className="max-h-full rounded-t-xl">
            <img src={logoBlack} alt="" />
          </div>
        </div>
        <div className="flex ">
          <div className="m-3 max-h-[20vh]">
            <div className="text-mainBlue font-MontserratBold">
              How Successfully Used Paid Marketing to Drive Incremental Ticket
              Sales
            </div>
            <div className="font-MontserratRegular text-xs text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              reprehenderit iure magnam? Tenetur, velit.
            </div>
            <div className="mt-2 text-gray-500">
              12 Mar - Jhon Doe
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BlogCard;
