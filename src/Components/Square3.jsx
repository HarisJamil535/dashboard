import React from "react";
import { IoChatbubblesOutline } from "react-icons/io5"; // Importing the chat icon

const Square3 = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray border ">
      {/* Container divided into two equal parts */}
      <div className="w-full h-[170px] flex flex-col justify-between">

        {/* Top Half - Process Status */}
        <div className="flex items-center justify-center h-1/2">
          <h3 className="text-xl text-gray font-bold">Contacted</h3>
        </div>

        {/* Bottom Half - Direct Message Section with background */}
        <div className="flex flex-col items-center justify-center h-1/2 w-full custom-bg-gradient py-2 rounded-b-lg">
          <IoChatbubblesOutline className="text-xl text-gray-600 mb-1" /> {/* Chat Icon */}
          <span className="text-sm font-semibold text-gray-700">Direct Message</span>
          <span className="text-gray-500 text-lg">0</span>
        </div>
      </div>
    </div>
  );
};

export default Square3;
