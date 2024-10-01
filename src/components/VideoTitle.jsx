import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-2 text-lg rounded-lg w-24 mx-2 hover:bg-opacity-50">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white p-2 text-lg rounded-lg w-24 hover:bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
