import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegBell, FaSignOutAlt } from "react-icons/fa";

const Navbar = ({ toggleSidebar, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked!`);
    setDropdownOpen(false);
  };

  return (
    <div className="w-full sticky z-[100] top-0 pt-4 pb-4 px-[5%] custom-bg-gradient text-gray-800 flex items-center justify-between shadow-lg shadow-gray-300">
      <div className="flex items-center">
        <GiHamburgerMenu
          size={24}
          onClick={toggleSidebar}
          className="text-gray sm:hidden mr-3 cursor-pointer"
        />
        <div className="flex items-center gap-1 md:gap-2 relative">
          <MdAccountCircle className="text-gray-700" size={32} />
          <button
            onClick={handleDropdownToggle}
            className="text-gray-700 font-bold text-lg rounded-lg px-2 text-center inline-flex items-center"
          >
            My Account
          </button>

          {dropdownOpen && (
            <div className="z-50 absolute mt-1 top-[32px] left-[40px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#" onClick={() => handleOptionClick("Settings")} className="block px-4 py-2 hover:bg-gray-100">
                    Manage Subscriptions
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <ul className="flex flex-row ml-auto text-gray-800 items-center gap-2">
        <li
          onClick={handleLogout}
          className="font-bold text-gray-700 text-lg flex items-center cursor-pointer"
        >
          <FaSignOutAlt className="mr-1 text-gray-700" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
