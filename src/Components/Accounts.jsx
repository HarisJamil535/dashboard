import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5"; // Import the close icon
import Square2 from "./Square2";
import Square3 from "./Square3";
import Square4 from "./Square4";
import Square1 from "./Square1";

const Accounts = () => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // State to manage the input value
  const [inputValue, setInputValue] = useState("");
  // State to store the list of emails/usernames
  const [users, setUsers] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      setUsers([...users, inputValue]);
      setInputValue(""); // Clear input after adding
    }
  };

  const handleRemoveUser = (indexToRemove) => {
    setUsers(users.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="pt-5 w-full flex flex-col items-center">
      {/* Display the list of added emails/usernames */}
      <div className="flex justify-center flex-wrap gap-2 mb-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-1 px-2 rounded-lg"
          >
            <span className="mr-1 text-[12px]">@{user}</span>
            <button
              className="text-purple-600 hover:text-purple-700"
              onClick={() => handleRemoveUser(index)}
            >
              <IoCloseCircle size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Email input section */}
      <div className="relative w-full md:w-[600px] lg:w-[800px] mb-5">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <span className="flex items-center pl-3 text-gray-500">@</span>
          <input
            type="email"
            id="email"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter your email"
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg focus:ring-0 focus:outline-none"
          />
          <button
            onClick={handleAddUser}
            className="bg-purple-600 text-white p-2 pl-3 pr-3 rounded-r-lg hover:bg-purple-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Responsive Grid of four squares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:max-w-[600px] mb-5">
        {/* Square 1 */}
       <Square1/>

        {/* Other squares (placeholder content) */}
        <div className=" w-full h-40 flex items-center justify-center rounded-lg text-gray">
          <Square2/>
        </div>
        <div className=" w-full h-40 flex items-center justify-center rounded-lg text-gray-600">
          <Square3/>
        </div>
        <div className=" w-full h-40 flex items-center justify-center rounded-lg text-gray-600">
          <Square4/>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
