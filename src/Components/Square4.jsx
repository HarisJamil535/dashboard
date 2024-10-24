import React from "react";
import { IoPeopleOutline } from "react-icons/io5"; // Importing the followers icon

const Square4 = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray border">
      {/* Container divided into two equal parts */}
      <div className="w-full h-[170px] flex flex-col justify-between">

        {/* Top Half - My Followers */}
        <div className="flex items-center justify-center h-1/2">
          <h3 className="text-xl text-gray font-bold">My Followers</h3>
        </div>

        {/* Bottom Half - Following Section with background */}
        <div className="flex flex-col items-center justify-center h-1/2 w-full custom-bg-gradient to-[#fecdf2] py-2 rounded-b-lg">
          <IoPeopleOutline className="text-xl text-gray-600 mb-1" /> {/* Followers Icon */}
          <span className="text-sm font-semibold text-gray-700">Following</span>
          <span className="text-gray-500 text-lg">5</span>
        </div>
      </div>
    </div>
  );
};

export default Square4;
