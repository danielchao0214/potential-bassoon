// Navbar.tsx

import DropdownButton from "./DropdownButton";
import { Link } from "react-router-dom";
import React from "react";

interface NavbarProps {
  dropdownButtonText: string;
}

const Navbar: React.FC<NavbarProps> = ({ dropdownButtonText }) => {
  return (
    <nav className="fixed z-20 w-full h-16 p-4 bg-white">
      <div className="flex items-center justify-between w-full h-full mx-auto">
        <Link
          to="/"
          className="mr-12 text-xl font-semibold text-black transition-all duration-1000 font-montserrat hover:text-darkText hover:text-lg"
        >
          <span className="hidden lg:inline">PotentialBassoon</span>
          <span className="lg:hidden">PB</span>
        </Link>
        <div className="relative inline-block p-2 mr-12 text-black transition-all duration-1000 border-2 border-transparent rounded w-52 hover:border-slate-700">
          <DropdownButton
            buttonText={dropdownButtonText}
            items={["Item 1", "Item 2", "Item 3"]}
            buttonClass="flex items-center justify-between w-full text-l font-montserrat font-semibold transition-all duration-300"
          />
        </div>
        <div className="relative w-5/12 mr-12">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-full px-4 py-2 text-xl text-center text-black placeholder-gray-400 bg-gray-100 border-2 border-transparent rounded focus:outline-none focus:border-slate-700 hover:border-slate-700"
          />
        </div>
        <div className="w-[12rem] mr-12 text-black text-center">
          PLACEHOLDER
        </div>
        <div className="w-16 text-2xl text-center text-black">DC</div>
      </div>
    </nav>
  );
};

export default Navbar;
