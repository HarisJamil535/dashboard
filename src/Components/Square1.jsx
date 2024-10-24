import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import '../App.css';

const Square1 = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [usernames, setUsernames] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const addUsername = (username) => {
    if (username && !usernames.includes(username)) {
      setUsernames((prev) => [...prev, username]);
    }
  };

  const removeUsername = (usernameToRemove) => {
    setUsernames((prev) => prev.filter((username) => username !== usernameToRemove));
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray border p-2">
      {/* Heading */}
      <h3 className="text-lg text-gray-600 font-bold mb-2">Session 1</h3>

      {/* Dropdown Button */}
      <div className="relative mb-2">
        <button
          id="dropdownDefaultButton"
          onClick={toggleDropdown}
          className=" custom-bg-gradient text-gray text-gray-600 hover:bg-[#ccb5f6] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          type="button"
        >
          Without Tag
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
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Checkboxes */}
      <div className="flex flex-col items-start mb-2">
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-1 custom-checkbox" />
          <span className="text-[13px]">Only New</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-1 custom-checkbox" />
          <span className="text-[13px]">Only Messages</span>
        </label>
      </div>

      {/* Display added usernames */}
      <div className="flex flex-wrap">
        {usernames.map((username, index) => (
          <div key={index} className="flex items-center bg-gray-200 rounded-full py-1 px-3 mr-2 mb-2">
            <span className="text-gray-700">{username}</span>
            <IoCloseCircle
              className="ml-2 text-red-500 cursor-pointer"
              onClick={() => removeUsername(username)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Square1;
