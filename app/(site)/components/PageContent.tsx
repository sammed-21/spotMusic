"use client";

import React from "react";
import { Song } from "@/types";
import SongItem from "./SongItem";
interface PageContentProps {
  songs: Song[];
}
type Props = {};

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">no songs available</div>;
  }
  return (
    <div
      className="
    grid
    grid-col-2
    sm:grid-cols-3
    md:grid-cols-3
    lg:grid-cols-4
    xl:grid-cols-5
    2xl:grid-cols-8
    gap-4
    mt-4

    "
    >
      {songs.map((item) => (
        <SongItem key={item.id} onClick={() => {}} data={item} />
      ))}
    </div>
  );
};

export default PageContent;
