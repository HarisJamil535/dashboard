import React, { useState } from "react";
import { IoPlaySharp } from "react-icons/io5"; // Importing the play icon

const Square2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("Text Group"); // Default text for the dropdown button

  // Function to toggle dropdown menu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (group) => {
    setSelectedGroup(group); // Update the button text to the selected group
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray border p-3">
      {/* Heading */}
      <h3 className="text-lg text-gray-600 font-bold mb-3">Messages</h3>

      {/* Dropdown Button */}
      <div className="relative mb-3">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className="custom-bg-gradient text-gray hover:bg-[#ccb5f6] text-gray-600 focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          type="button"
        >
          {selectedGroup} {/* Display the selected group */}
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div
            id="dropdown"
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700"
          >
            <ul
              className="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a
                  href="#"
                  onClick={() => handleOptionSelect("Dashboard")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleOptionSelect("Settings")}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
             
            </ul>
          </div>
        )}
      </div>

      {/* Button with Play Icon */}
      <button className="bg-custom-gradient text-white focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 inline-flex items-center">
        <IoPlaySharp className="mr-2" /> Start
      </button>
    </div>
  );
};

export default Square2;
