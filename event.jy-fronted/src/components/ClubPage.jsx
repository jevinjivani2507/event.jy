import React from "react";
import logoBlack from "../Images/logoWhite.png";
const ClubPage = () => {
  return (
    <div className="flex justify-center h-screen px-40 py-10 gap-10">
      <div className="w-1/2 flex">
        <div>
          <h2>Programming Club</h2>
          <p className="font-MontserratSemiBold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus iure delectus dicta, itaque, illum laboriosam fugit
            veritatis, explicabo beatae deleniti exercitationem? Reprehenderit
            doloribus quod nemo, eius ex impedit nisi quia.
          </p>
          <h3 className="mt-3">
            Contacts
          </h3>
        </div>
      </div>
      <div className="w-1/2 flex justify-center h-[30rem] items-center rounded-2xl shadow-lg bg-dSecondary">
        <img className="" src={logoBlack} alt="" />
      </div>
    </div>
  );
};

export default ClubPage;
