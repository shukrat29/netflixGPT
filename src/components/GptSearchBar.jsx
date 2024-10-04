import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-[20%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-gray-400">
        <input
          type="text"
          className=" p-2 m-4 col-span-8"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-500 text-white col-span-4 rounded-lg">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
