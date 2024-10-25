import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5"; 

const Hashtag = () => {
  const [inputValue, setInputValue] = useState("");
  
  const [hashtags, setHashtags] = useState([]);

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
              className="text-[#fe2dbc]  hover:text-purple-700"
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
    </div>
  );
};

export default Hashtag;
