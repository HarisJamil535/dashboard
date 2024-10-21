import React from "react";
import { IoListOutline } from "react-icons/io5"; // Import the list icon

const List = () => {
  return (
    <div className="pt-5 w-full flex flex-col items-center">
      {/* Text box section for entering list items */}
      <div className="relative w-full md:w-[600px] lg:w-[800px] mb-5">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <span className="flex items-center pl-3 text-gray-500">
            <IoListOutline size={18} /> {/* List icon */}
          </span>
          <input
            type="text"
            placeholder="Enter a list item"
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg focus:ring-0 focus:outline-none h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default List;
