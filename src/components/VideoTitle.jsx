import React from "react";

const VideoTitle = ({ title, overview, isPlaying, onTogglePlayPause }) => {
  return (
    <div className="hidden md:block absolute z-10 w-full h-full lg:pt-[30%] md:pt-[16%] px-6 sm:px-12 md:px-20 text-white bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="py-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 text-sm sm:text-base">
        {overview}
      </p>
      <div>
        <button
          className="bg-gray-500 text-white p-2 text-sm sm:text-lg rounded-lg w-20 sm:w-24 mx-2 hover:bg-opacity-50"
          onClick={onTogglePlayPause}
        >
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button className="bg-gray-500 text-white p-2 text-sm sm:text-lg rounded-lg w-24 sm:w-24 hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
