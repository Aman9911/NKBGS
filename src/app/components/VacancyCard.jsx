import React from "react";
import { MdCancel } from "react-icons/md";

const VacancyCard = ({ post, handleOnDelete }) => {
  return (
    <div className="flex border-2 border-slate-400 border-opacity-55 m-1 p-2">
      <div className="w-full">
        <h1 className="md:text-xl font-bold">{post.post}</h1>
        <p className="text-sm md:text-base">{post.description}</p>
      </div>
      {handleOnDelete && (
        <div className="cursor-pointer relative w-fit h-fit text-zinc-800 hover:text-zinc-950">
          <MdCancel size={20} onClick={() => handleOnDelete(post.$id)} />
        </div>
      )}
    </div>
  );
};

export default VacancyCard;
