import React from "react";

interface DropdownListProps {
  items: string[]; // Prop for the list items
}

const DropdownList: React.FC<DropdownListProps> = ({ items }) => {
  return (
    <ul className="dropdown-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DropdownList;
