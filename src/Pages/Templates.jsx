import React, { useState } from "react";
import { FiPlus, FiTrash2 } from 'react-icons/fi';  
import { IoIosCloseCircle } from "react-icons/io";
import '../App.css';

const Templates = () => {
  const [templateGroups, setTemplateGroups] = useState([]); // State for storing template groups

  const addTemplateGroup = () => {
    setTemplateGroups([...templateGroups, { id: Date.now(), intros: [{ id: 1, text: "" }], bodies: [{ id: 1, text: "" }], outros: [{ id: 1, text: "" }] }]);
  };

  const removeTemplateGroup = (id) => {
    setTemplateGroups(templateGroups.filter(group => group.id !== id));
  };

  const addTextArea = (groupId, setFunction, items) => {
    const updatedGroups = templateGroups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          [setFunction]: [...group[setFunction], { id: group[setFunction].length + 1, text: "" }]
        };
      }
      return group;
    });
    setTemplateGroups(updatedGroups);
  };

  const removeTextArea = (groupId, setFunction, items, id) => {
    const updatedGroups = templateGroups.map(group => {
      if (group.id === groupId) {
        return {
          ...group,
          [setFunction]: group[setFunction].filter(item => item.id !== id)
        };
      }
      return group;
    });
    setTemplateGroups(updatedGroups);
  };

  const renderTextAreas = (groupId, items, setFunction) => {
    return items.map((item) => (
      <div key={item.id} className="flex items-center mb-2">
        <textarea
          rows="2"
          value={item.text}
          onChange={(e) =>
            setFunction(groupId, items, item.id, e.target.value)
          }
          className="border border-gray-300 rounded-md w-full px-2 py-1"
        />
        <button
          className="ml-1 text-red-500"
          onClick={() => removeTextArea(groupId, setFunction, items, item.id)}
        >
          <FiTrash2 className="text-xl" />
        </button>
      </div>
    ));
  };

  return (
    <div className="pl-2 md:pl-5 pt-4 pr-2 md:pr-5 flex flex-col items-center">
      {/* Button with + icon */}
      <div className="w-full flex justify-start">
        <button
          className="border py-2 md:py-2 px-2 md:text-[14px] text-[12px] md:px-3 rounded-md bg-custom-gradient text-white flex items-center"
          onClick={addTemplateGroup} // Add new template group
        >
          <FiPlus className="mr-1" />  {/* Adding the + icon */}
          Create New Text Template Group
        </button>
      </div>

      {/* Template Groups Layout */}
      {templateGroups.map((group) => (
        <div key={group.id} className="custom-bg-gradient py-2 px-2 rounded-md mt-2 w-full flex flex-col space-y-2 relative">
          <button
            className="absolute top-2 right-2 text-red-500"
            onClick={() => removeTemplateGroup(group.id)} // Close button
          >
            <IoIosCloseCircle className="text-xl" />
          </button>
          
          {/* Row with input, save button, and social media icons */}
          <div className="w-full flex justify-between items-center">
            {/* Left: Input and Save button */}
            <div className="flex items-center space-x-1">
              <input
                type="text"
                placeholder="Enter Group"
                className="border border-gray-300 rounded-md py-1 md:py-1 px-2 max-w-[150px]"
              />
              <button className="bg-custom-gradient text-white py-1 md:py-[6px] px-3 text-[12px] md:text-[14px] md:px-4 rounded-md">Save</button>
            </div>

          
          </div>

          {/* Columns for Intros, Bodies, and Outros */}
          <div className="w-full flex mt-0  flex-col md:flex-row md:justify-between">
            {/* Intros Column */}
            <div className="w-full md:w-1/3 p-1 pb-1">
              <h3 className="mb-1 text-gray-700 text-[14px]">Intros</h3>
              {renderTextAreas(group.id, group.intros, 'intros')}
              <button
                className="flex items-center   mt-0 text-white text-[11px] rounded-2xl bg-blue-400 px-2 py-[0.15rem]"
                onClick={() => addTextArea(group.id, 'intros', group.intros)}
              >
                <FiPlus size={14} className="mr-1" /> Add More
              </button>
            </div>

            {/* Bodies Column */}
            <div className="w-full md:w-1/3 p-1 pb-1">
              <h3 className="mb-2 text-gray-700 text-[14px] ">Bodies</h3>
              {renderTextAreas(group.id, group.bodies, 'bodies')}
              <button
                className="flex items-center mt-0 text-white text-[11px] rounded-2xl bg-blue-400 px-2 py-[0.15rem]"
                onClick={() => addTextArea(group.id, 'bodies', group.bodies)}
              >
                <FiPlus className="mr-1" /> Add More
              </button>
            </div>

            {/* Outros Column */}
            <div className="w-full md:w-1/3 p-1 pb-1">
              <h3 className="mb-2 text-gray-700 text-[14px]">Outros</h3>
              {renderTextAreas(group.id, group.outros, 'outros')}
              <button
                className="flex items-center mt-0 text-white text-[11px] rounded-2xl bg-blue-400 px-2 py-[0.15rem]"
                onClick={() => addTextArea(group.id, 'outros', group.outros)}
              >
                <FiPlus className="mr-1" /> Add More
              </button>
            </div>
          </div>

          {/* Delete All Button */}
          <div className="w-full flex justify-end">
            <button
              className="bg-red-500 text-white py-[0.4rem] text-[12px] md:text-[12px] px-3 rounded-md flex items-center"
              onClick={() => {
                setTemplateGroups(templateGroups.map(group => ({
                  ...group,
                  intros: [{ id: 1, text: "" }],
                  bodies: [{ id: 1, text: "" }],
                  outros: [{ id: 1, text: "" }]
                })));
              }}
            >
              <FiTrash2 className="mr-2" /> Delete All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
