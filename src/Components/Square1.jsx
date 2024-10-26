import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import '../App.css';

const Square1 = ({ onActionSelect }) => {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [usernames, setUsernames] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Without Tag");
  const [selectedAction, setSelectedAction] = useState("Actions"); // Default action

  const toggleFirstDropdown = () => {
    setIsFirstDropdownOpen(!isFirstDropdownOpen);
    setIsSecondDropdownOpen(false); // Close the second dropdown when the first is opened
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
    setIsFirstDropdownOpen(false); // Close the first dropdown when the second is opened
  };

  const addUsername = (username) => {
    if (username && !usernames.includes(username)) {
      setUsernames((prev) => [...prev, username]);
    }
  };

  const removeUsername = (usernameToRemove) => {
    setUsernames((prev) => prev.filter((username) => username !== usernameToRemove));
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsFirstDropdownOpen(false); // Close dropdown after selection
  };

  const handleActionSelect = (action) => {
    setSelectedAction(action);
    onActionSelect(action); // Notify parent about the selected action
    setIsSecondDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center rounded-lg text-gray p-3">
      {/* Heading */}
      <h3 className="text-lg text-gray-600 font-bold mb-2">Session Tag</h3>

      {/* First Dropdown Button for Without Tag */}
      <div className="relative mb-2">
        <button
          id="dropdownDefaultButton"
          onClick={toggleFirstDropdown}
          className="custom-bg-gradient text-gray text-gray-600 hover:bg-[#ccb5f6] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          type="button"
        >
          {selectedOption}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown menu for Without Tag */}
        {isFirstDropdownOpen && (
          <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" onClick={() => handleOptionSelect("Option 1")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Option 1
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleOptionSelect("Option 2")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Checkbox */}
      <div className="flex flex-col justify-center items-start mb-2">
        <label className="flex items-center mb-1 mt-1">
          <input type="checkbox" className="mr-1 custom-checkbox" />
          <span className="text-[13px]">Only New</span>
        </label>
      </div>

      {/* Action Dropdown */}
      <div className="relative mb-2">
        <button
          id="actionDropdownButton"
          onClick={toggleSecondDropdown}
          className="custom-bg-gradient text-gray text-gray-600 hover:bg-[#ccb5f6] focus:outline-none font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          type="button"
        >
          {selectedAction}
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
        </button>

        {/* Dropdown menu for Actions */}
        {isSecondDropdownOpen && (
          <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionDropdownButton">
              <li>
                <a href="#" onClick={() => handleActionSelect("Contact")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleActionSelect("Follow")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Follow
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleActionSelect("Contact & Follow")} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Contact & Follow
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Display added usernames */}
      <div className="flex flex-wrap">
        {usernames.map((username, index) => (
          <div key={index} className="flex items-center bg-gray-200 rounded-full py-1 px-3 mr-2 mb-2">
            <span className="text-gray-700">{username}</span>
            <IoCloseCircle className="ml-2 text-red-500 cursor-pointer" onClick={() => removeUsername(username)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Square1;
