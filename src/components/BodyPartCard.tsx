import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import React from "react";

interface BodyPartCardProps {
  bodyPart: string;
  upvotes: number;
  downvotes: number;
}

const BodyPartCard: React.FC<BodyPartCardProps> = ({
  bodyPart,
  upvotes,
  downvotes,
}) => {
  return (
    <div className="px-4 py-1 bg-white rounded-md">
      <div className="flex items-center justify-between">
        <a
          href="https://musclewiki.com/exercises/male/quads"
          target="_blank"
          rel="noreferrer"
          className="text-base font-normal"
        >
          {bodyPart}
        </a>
        <div className="flex items-center bg-gray-100 rounded-full">
          <button className="flex items-center px-2 py-0.5 hover:bg-gray-200 rounded-l-full shadow-[0.525em_0px_0px_-0.5em_#cbd5e1] transition-all duration-500">
            <AiOutlineLike className="mr-0.5 text-green-600" />
            <p className="text-gray-700">{upvotes}</p>
          </button>
          <button className="flex items-center px-2 py-0.5 hover:bg-gray-200 rounded-r-full shadow-[-0.525em_0px_0px_-0.5em_#cbd5e1] transition-all duration-500">
            <AiOutlineDislike className="mr-0.5 text-red-600" />
            <p className="text-gray-700">{downvotes}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BodyPartCard;
