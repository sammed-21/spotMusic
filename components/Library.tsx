"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import { GiMusicalNotes } from "react-icons/gi";
import React from "react";
const onClick = () => {
  //handle upload later
};
const Library = () => {
  return (
    <div className="flex flex-col ">
      <div
        className="
        flex
        items-center
        justify-between
        px-5
        pt-4
        
        "
      >
        <div
          className="inline-flex
            items-center
            gap-x-2"
        >
          <GiMusicalNotes className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md ">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition "
        />
      </div>
      <div
        className="flex
      flex-col
      gay-y-2
      mt-4
      px-3
      "
      >
        List of song
      </div>
    </div>
  );
};

export default Library;
