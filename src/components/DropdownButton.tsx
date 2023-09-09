// DropdownButton.tsx

import React, { useState } from "react";

import { BiSolidChevronDown } from "react-icons/bi";

interface DropdownButtonProps {
  buttonText: string;
  items: string[];
  buttonClass: string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  buttonText,
  items,
  buttonClass,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <button className={`${buttonClass}`} onClick={toggleDropdown}>
        <span>{buttonText}</span>
        <BiSolidChevronDown className="" />
      </button>
      {isDropdownOpen && (
        <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-300 rounded top-full">
          {items.map((item, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropdownButton;
