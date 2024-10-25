import React, { useState } from "react";
import { FiPlus, FiTrash2 } from 'react-icons/fi';  // Importing Plus and Trash icons
import { FaFacebook, FaInstagram } from 'react-icons/fa';  // Importing Facebook and Instagram icons
import '../App.css'

const Templates = () => {
  const [intros, setIntros] = useState([{ id: 1, text: "" }]);
  const [bodies, setBodies] = useState([{ id: 1, text: "" }]);
  const [outros, setOutros] = useState([{ id: 1, text: "" }]);

  const addTextArea = (setFunction, items) => {
    setFunction([...items, { id: items.length + 1, text: "" }]);
  };

  const removeTextArea = (setFunction, items, id) => {
    setFunction(items.filter(item => item.id !== id));
  };

  const renderTextAreas = (items, setFunction) => {
    return items.map((item) => (
      <div key={item.id} className="flex items-center mb-2">
        <textarea
          rows="2"
          value={item.text}
          onChange={(e) =>
            setFunction(items.map(i => i.id === item.id ? { ...i, text: e.target.value } : i))
          }
          className="border border-gray-300 rounded-md w-full px-2 py-1"
        />
        <button
          className="ml-2 text-red-500"
          onClick={() => removeTextArea(setFunction, items, item.id)}
        >
          <FiTrash2 className="text-2xl" />
        </button>
      </div>
    ));
  };

  return (
    <div className="pl-2 md:pl-5 pt-4 pr-2 md:pr-5 flex flex-col items-center">
      {/* Button with + icon */}
      <div className="w-full flex justify-start">
        <button className="border py-2 md:py-2 px-2 md:text-[15px]  text-[12px] md:px-3 rounded-md bg-custom-gradient text-white flex items-center">
          <FiPlus className="mr-1" />  {/* Adding the + icon */}
          Create New Text Template Group
        </button>
      </div>

      {/* Main Container */}
      <div className="custom-bg-gradient py-4 px-4 rounded-md mt-4 w-full flex flex-col space-y-4">
        
        {/* Row with input, save button, and social media icons */}
        <div className="w-full flex justify-between items-center">
          {/* Left: Input and Save button */}
          <div className="flex items-center space-x-1">
            <input
              type="text"
              placeholder="Enter Group"
              className="border border-gray-300 rounded-md py-1 md:py-2 px-2 max-w-[150px]"
            />
            <button className="bg-custom-gradient text-white py-2 md:py-2 px-3 text-[12px] md:text-[15px] md:px-4 rounded-md">Save</button>
          </div>

          {/* Right: Facebook and Instagram icons */}
          <div className="flex space-x-2">
            <FaFacebook className="text-blue-600 md:text-3xl text-2xl  cursor-pointer" />
            <FaInstagram className="text-pink-400 md:text-3xl text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Columns for Intros, Bodies, and Outros */}
        <div className="w-full flex mt-0 md:mt-2 flex-col md:flex-row md:justify-between">
          {/* Intros Column */}
          <div className="w-full md:w-1/3 p-2 pb-0">
            <h3 className="mb-2 text-gray-700">Intros</h3>
            {renderTextAreas(intros, setIntros)}
            <button
              className="flex items-center text-sm text-blue-500 mt-2"
              onClick={() => addTextArea(setIntros, intros)}
            >
              <FiPlus className="mr-1" /> Add More
            </button>
          </div>

          {/* Bodies Column */}
          <div className="w-full md:w-1/3 p-2 pb-0">
            <h3 className="mb-2 text-gray-700">Bodies</h3>
            {renderTextAreas(bodies, setBodies)}
            <button
              className="flex items-center text-sm text-blue-500 mt-2"
              onClick={() => addTextArea(setBodies, bodies)}
            >
              <FiPlus className="mr-1" /> Add More
            </button>
          </div>

          {/* Outros Column */}
          <div className="w-full md:w-1/3 p-2 pb-0">
            <h3 className="mb-2 text-gray-700">Outros</h3>
            {renderTextAreas(outros, setOutros)}
            <button
              className="flex items-center text-sm text-blue-500 mt-2"
              onClick={() => addTextArea(setOutros, outros)}
            >
              <FiPlus className="mr-1" /> Add More
            </button>
          </div>
        </div>

        {/* Delete All Button */}
        <div className="w-full flex justify-end">
          <button
            className="bg-red-500 text-white py-2 text-[12px] md:text-[15px] px-3 rounded-md flex items-center"
            onClick={() => {
              setIntros([{ id: 1, text: "" }]);
              setBodies([{ id: 1, text: "" }]);
              setOutros([{ id: 1, text: "" }]);
            }}
          >
            <FiTrash2 className="mr-2" /> Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Templates;
