import React, { useEffect, useState } from "react";
import { IoCloseCircle } from "react-icons/io5"; 
import Square3 from "./Square3";
import Square4 from "./Square4";
import Sq1andSq2 from "./Sq1andSq2";

const Accounts = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [processMessage, setProcessMessage] = useState("Process is stopped"); 

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddUser = () => {
    if (inputValue.trim() !== "") {
      const newUsers = [...users, inputValue];
      setUsers(newUsers);
      localStorage.setItem("users", JSON.stringify(newUsers)); 
      setProcessMessage(`User @${inputValue} added.`); 
      setInputValue(""); 
    }
  };

  const handleRemoveUser = (indexToRemove) => {
    const removedUser = users[indexToRemove];
    const newUsers = users.filter((_, index) => index !== indexToRemove);
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers)); 
    setProcessMessage(`User @${removedUser} removed.`); 
  };

  // Function to update process message from Square2
  const handleTogglePlay = (isPlaying) => {
    setProcessMessage(isPlaying ? "Process is running" : "Process is stopped");
  };

  return (
    <div className="pt-3 w-full flex flex-col items-center">
      {/* Display the list of added emails/usernames */}
      <div className="flex justify-center flex-wrap gap-2 mb-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-1 px-2 rounded-lg"
          >
            <span className="mr-1 text-[12px]">@{user}</span>
            <button
              className="text-[#fe2dbc] bg-clip-text hover:text-purple-700"
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
            placeholder="username"
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg focus:ring-0 focus:outline-none"
          />
          <button
            onClick={handleAddUser}
            className="bg-custom-gradient text-white p-2 pl-3 pr-3 rounded-r-lg hover:bg-purple-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Responsive Grid of four squares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-[700px] mb-3">
        {/* Full-width row for Sq1andSq2 */}
        <div className="col-span-1 sm:col-span-2">
          <Sq1andSq2 onTogglePlay={handleTogglePlay} />
        </div>

        {/* Second row with Square3 and Square4 side by side */}
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square3 />
        </div>
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square4 />
        </div>
      </div>

      {/* Centered message below the grid */}
      <div className="text-center mb-0">
        <p className="text-[16px] italic text-gray-800">{processMessage}</p>
      </div>
    </div>
  );
};

export default Accounts;
