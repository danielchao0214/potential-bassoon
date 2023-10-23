import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

import React from "react";

interface CommentCardProps {
  username: string;
  comment: string;
  likes: number;
  dislikes: number;
}

const CommentCard: React.FC<CommentCardProps> = ({
  username,
  comment,
  likes,
  dislikes,
}) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-base font-semibold">{username}</h3>
          <p className="text-gray-700">{comment}</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <AiOutlineLike className="mr-0.5 text-green-600" />
            <p className="text-gray-700">{likes}</p>
          </div>
          <div className="h-8 border-l border-gray-400" />
          <div className="flex items-center ml-4">
            <AiOutlineDislike className="mr-0.5 text-red-600" />
            <p className="text-gray-700">{dislikes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
