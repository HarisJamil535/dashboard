import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegBell, FaSignOutAlt } from "react-icons/fa"; // Importing the logout icon

const Navbar = ({ toggleSidebar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked!`); // Handle the option click as needed
    setDropdownOpen(false); // Close the dropdown after selecting an option
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
            id="dropdownDefaultButton"
            onClick={handleDropdownToggle}
            className="text-gray-700 font-bold text-lg rounded-lg px-2 text-center inline-flex items-center"
            type="button"
          >
            My Account
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div id="dropdown" className="z-50 absolute mt-1 top-[32px] left-[40px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                <li>
                  <a
                    href="#"
                    onClick={() => handleOptionClick("Dashboard")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Change Password
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => handleOptionClick("Settings")}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Manage Subscriptions
                  </a>
                </li>
                
              </ul>
            </div>
          )}
        </div>
      </div>
      <ul className="flex flex-row ml-auto text-gray-800 items-center gap-2">
        <li className="font-bold text-gray-700 text-lg flex items-center">
          <FaSignOutAlt className="mr-1 text-gray-700" /> {/* Logout icon */}
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
