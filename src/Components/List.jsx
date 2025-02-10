import React, { useState, useEffect } from "react";
import { IoListOutline } from "react-icons/io5"; // Import the list icon
import Sq1andSq2 from "./Sq1andSq2"; // Import Sq1andSq2 component
import Square3 from "./Square3"; // Import Square3 component
import Square4 from "./Square4"; // Import Square4 component

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const [processMessage, setProcessMessage] = useState("Process is stopped");

  // Load saved input value from localStorage on component mount
  useEffect(() => {
    const savedInput = localStorage.getItem("listInput");
    if (savedInput) {
      setInputValue(savedInput);
    }
  }, []);

  // Save the input value to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("listInput", inputValue);
  }, [inputValue]);

  // Function to update process message from Sq1andSq2
  const handleTogglePlay = (isPlaying) => {
    setProcessMessage(isPlaying ? "Process is running" : "Process is stopped");
  };

  return (
    <div className="pt-5 w-full flex flex-col items-center">
      {/* Text box section for entering list items */}
      <div className="relative w-full md:w-[600px] lg:w-[800px] mb-1">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <span className="flex items-center pl-3 text-gray-500">
            <IoListOutline size={18} /> {/* List icon */}
          </span>
          <input
            type="text"
            placeholder="Enter a list item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg justify-center focus:ring-0 focus:outline-none h-10"
          />
        </div>
      </div>
      {/* Instruction text */}
      <p className="text-gray-500 text-left italic text-[12px] w-full md:w-[600px] lg:w-[800px]">
        Enter usernames separated by space
      </p>

      {/* Responsive Grid of four squares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-[800px] mt-2">
        {/* Full-width row for Sq1andSq2 */}
        <div className="col-span-1 sm:col-span-2">
          <Sq1andSq2 onTogglePlay={handleTogglePlay} /> {/* Pass the handler here */}
        </div>

        {/* Second row with Square3 and Square4 side by side */}
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square3 />
        </div>
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square4 />
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="text-[16px] italic text-gray-800">{processMessage}</p>
      </div>
    </div>
  );
};

export default List;
