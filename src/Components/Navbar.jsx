import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdAccountCircle } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="w-full pt-4 pb-4 px-[5%] custom-bg-gradient text-gray-800 flex items-center justify-between shadow-lg shadow-gray-300">
      <div className="flex items-center">
        <GiHamburgerMenu
          size={24}
          onClick={toggleSidebar}
          className="text-gray sm:hidden mr-3 cursor-pointer"
        />
        <div className="flex items-center gap-1 md:gap-2 ">
          <MdAccountCircle size={32} />
          <span className="font-semibold text-gray-900">My Account</span>
        </div>
      </div>
      <ul className="flex flex-row ml-auto text-gray-800 items-center gap-2">
        <FaRegBell size={30} className="text-gray-800" />
      </ul>
    </div>
  );
};

export default Navbar;
