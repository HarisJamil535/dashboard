import React, { useState } from "react";
import { IoCloseCircle, IoLinkOutline } from "react-icons/io5"; // Import the icons

const Posts = () => {
  // State to manage the input value
  const [inputValue, setInputValue] = useState("");
  // State to store the list of links
  const [links, setLinks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddLink = () => {
    if (inputValue.trim() !== "") {
      setLinks([...links, inputValue]);
      setInputValue(""); // Clear input after adding
    }
  };

  const handleRemoveLink = (indexToRemove) => {
    setLinks(links.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="pt-5 w-full flex flex-col items-center">
      {/* Display the list of added links */}
      <div className="flex justify-center flex-wrap gap-2 mb-2">
        {links.map((link, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-1 px-2 rounded-lg"
          >
            {/* Link Icon and Link text */}
            <IoLinkOutline className="mr-1 text-gray-600" size={15} /> 
            <span className="mr-1 text-[12px]">{link}</span>

            {/* Remove Button */}
            <button
              className="text-[#fe2dbc] hover:text-purple-700"
              onClick={() => handleRemoveLink(index)}
            >
              <IoCloseCircle size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Link input section */}
      <div className="relative w-full md:w-[600px] lg:w-[800px] mb-5">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <span className="flex items-center pl-3 text-gray-500">
            <IoLinkOutline size={18} /> {/* Link icon */}
          </span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a link"
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg focus:ring-0 focus:outline-none"
          />
          <button
            onClick={handleAddLink}
            className="bg-custom-gradient text-white p-2 pl-3 pr-3 rounded-r-lg hover:bg-purple-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Posts;
