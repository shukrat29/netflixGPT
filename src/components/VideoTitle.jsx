import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 sm:px-12 md:px-24 absolute text-white bg-gradient-to-r from-black to-transparent">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h1>
      <p className="py-6 w-full sm:w-3/4 md:w-1/2 lg:w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-2 text-sm sm:text-lg rounded-lg w-20 sm:w-24 mx-2 hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white p-2 text-sm sm:text-lg rounded-lg w-20 sm:w-24 hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
