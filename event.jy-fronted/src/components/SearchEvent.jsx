import React from "react";
import { Input } from "@nextui-org/react";

const SearchEvent = () => {
  return (
    <div className="bg-[#242565] text-white mx-10 h-[18vh] rounded-2xl flex justify-center items-center">
      <div className="flex h-full w-full px-10">
        <div className="w-1/3 flex justify-center items-center">
          <Input
            clearable
            underlined
            labelPlaceholder="Search Event"
            css={{ $$inputColor: "#FA7000"}}
            // initialValue="NextUI"
            // color="default"
          />
          {/* <Input underlined className="texty" labelPlaceholder="Next UI" css={{ $$inputColor: "#FA7000"}} /> */}
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Input
            clearable
            underlined
            labelPlaceholder="Search Event"
            initialValue="NextUI"
            color="blue"
          />
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Input
            clearable
            underlined
            labelPlaceholder="Search Event"
            initialValue="NextUI"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchEvent;
