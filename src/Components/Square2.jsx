import React, { useState } from "react";
import { IoPlaySharp, IoStopSharp } from "react-icons/io5"; // Importing the play and stop icons

const Square2 = ({ isMessageTemplateDisabled }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("Text Group"); // Default text for the dropdown button
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/stop status

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (group) => {
    setSelectedGroup(group); // Update the button text to the selected group
    setDropdownOpen(false); // Close the dropdown
  };

  // Function to toggle play/stop
  const togglePlay = () => {
    setIsPlaying(!isPlaying); // Toggle the playing state
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray p-3">
      {/* Heading */}
      <h3 className="text-lg text-gray-600 font-bold mb-3">Message Template</h3>

      {/* Dropdown Button */}
      <div className="relative mb-3">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className={`custom-bg-gradient text-gray hover:bg-[#ccb5f6] text-gray-600 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center ${isMessageTemplateDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
          type="button"
          disabled={isMessageTemplateDisabled} // Disable button if the dropdown is disabled
        >
          {selectedGroup}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" onClick={() => handleOptionSelect("Dashboard")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleOptionSelect("Settings")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Settings
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Play/Stop Button */}
      <button
        onClick={togglePlay}
        className={`flex items-center mt-2 px-3 py-2 rounded-lg transition-colors duration-300 ${isPlaying ? 'bg-gray-500 text-white' : 'custom-bg-gradient text-gray-700 '}`}
      >
        {isPlaying ? (
          <>
            <IoStopSharp className="mr-1" />
            Stop
          </>
        ) : (
          <>
            <IoPlaySharp className="mr-1" />
            Play
          </>
        )}
      </button>
    </div>
  );
};

export default Square2;
