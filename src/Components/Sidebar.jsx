import React from 'react';
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';  // Import useLocation
import { IoHome } from "react-icons/io5";
import { GiAlliedStar } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { FaTags } from "react-icons/fa6";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();  // Get current location

  const isActive = (path) => location.pathname === path;  // Function to check if the path is active

  return (
    <div className={`h-screen overflow-y-hidden pl-8 pr-8 pt-24  custom-bg-gradient

 w-56 transition-transform transform fixed z-50 sm:relative sm:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:block`}>
      <IoClose size={24} onClick={onClose} className="text-gray absolute top-3 right-3 cursor-pointer sm:hidden" />
      
      <ul className="flex flex-col h-full items-start justify-start text-left gap-9 text-gray ">
        <li>
          <Link to='/main'>
            <div className={`flex justify-center text-gray-700  items-center drop-shadow-xl gap-2 ${isActive('/main') ? 'bg-custom-gradient py-2 px-3 rounded-md text-white' : ''}`}>
              <IoHome size={26} /> <span> Main</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/prospectus'>
            <div className={`flex justify-center text-gray-700  items-center drop-shadow-lg gap-2 ${isActive('/prospectus') ? 'bg-custom-gradient py-2 px-3 rounded-md text-white' : ''}`}>
              <GiAlliedStar size={26} /> <span> Prospectus</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/settings'>
            <div className={`flex items-center text-gray-700 justify-center drop-shadow-lg gap-2 ${isActive('/settings') ? 'bg-custom-gradient py-2 px-3 rounded-md text-white' : ''}`}>
              <IoSettingsSharp size={26} /> <span> Settings</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/templates'>
            <div className={`flex items-center text-gray-700 justify-center gap-2 drop-shadow-lg ${isActive('/templates') ? 'bg-custom-gradient py-2 px-3 rounded-md text-white' : ''}`}>
              <HiTemplate size={26} /> <span> Templates</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/tags'>
            <div className={`flex items-center text-gray-700 drop-shadow-lg justify-center gap-2 ${isActive('/tags') ? 'bg-custom-gradient py-2 px-3 rounded-md text-white' : ''}`}>
              <FaTags size={26} /> <span> Tags</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
