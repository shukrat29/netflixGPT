import React from "react";
import GptSearchBar from "../gpt/GptSearchBar";
import GptMovieSuggestions from "../gpt/GptMovieSuggestions";

const GptSearchPage = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <img
          className="h-screen w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/AU-en-20240923-TRIFECTA-perspective_71126b8c-6305-4da6-a0d5-b4ca8c9e3fc6_large.jpg"
          alt=""
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
