import React from "react";

const SearchEvent = () => {
  return (
    <div className="bg-[#242565] text-white mx-10 h-40 rounded-2xl flex justify-center items-center">
      <div className="flex h-full w-full px-10">
        <div className="w-1/3 flex flex-col items-center">
            Search Event
            <input type="text" />
        </div>
        <div className="w-1/3 flex items-center">
            Place
        </div>
        <div className="w-1/3 flex items-center">
            Time
        </div>
      </div>    
    </div>
  );
};

export default SearchEvent;
