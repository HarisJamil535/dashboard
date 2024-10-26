import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5"; 
import Sq1andSq2 from "./Sq1andSq2"; // Import Sq1andSq2 component
import Square3 from "./Square3"; // Import Square3 component
import Square4 from "./Square4"; // Import Square4 component

const Hashtag = () => {
  const [inputValue, setInputValue] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [processMessage, setProcessMessage] = useState("Process is stopped"); // Move processMessage inside the component

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddHashtag = () => {
    if (inputValue.trim() !== "") {
      setHashtags([...hashtags, inputValue]);
      setInputValue(""); 
    }
  };

  const handleRemoveHashtag = (indexToRemove) => {
    setHashtags(hashtags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="pt-5 w-full flex flex-col items-center">
      {/* Display the list of added hashtags */}
      <div className="flex justify-center flex-wrap gap-2 mb-2">
        {hashtags.map((tag, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 p-1 px-2 rounded-md"
          >
            {/* Prepend # to each tag */}
            <span className="mr-1 text-[12px]"># {tag}</span>
            <button
              className="text-[#fe2dbc] hover:text-purple-700"
              onClick={() => handleRemoveHashtag(index)}
            >
              <IoCloseCircle size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Responsive Hashtag input section */}
      <div className="relative w-full md:w-[600px] lg:w-[800px] mb-5">
        <div className="flex items-center border border-gray-300 rounded-lg">
          <span className="flex items-center pl-3 text-gray-500">#</span>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter a hashtag"
            className="flex-1 p-2 bg-gray-50 border-none rounded-lg focus:ring-0 focus:outline-none"
          />
          <button
            onClick={handleAddHashtag}
            className="bg-custom-gradient text-white p-2 pl-3 pr-3 rounded-r-lg hover:bg-purple-700"
          >
            +
          </button>
        </div>
      </div>

      {/* Responsive Grid of squares below the input section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-[800px] mb-3">
        {/* Full-width row for Sq1andSq2 */}
        <div className="col-span-1 sm:col-span-2">
          <Sq1andSq2 />
        </div>

        {/* Second row with Square3 and Square4 side by side */}
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square3 />
        </div>
        <div className="w-full flex items-center justify-center rounded-lg text-gray-600">
          <Square4 />
        </div>
      </div>

      {/* Display process message */}
      <div className="text-center mb-0">
        <p className="text-[12px] italic text-gray-800">{processMessage}</p>
      </div>
    </div>
  );
};

export default Hashtag;
