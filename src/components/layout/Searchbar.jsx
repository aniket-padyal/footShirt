import React from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {
  return (
    <div>
      <div className="w-screen ">
        <nav className="w-[90%] sm:w-[88%] py-5 m-auto flex items-center gap-5 cursor-default  ">
          {/* input bar */}
          <div className="w-full sm:w-70 flex items-center pl-2 border-2 rounded-4xl hover:border-blue-500 transition-all ">
            {/* search svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7 cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              className="w-full p-2 outline-none font-bold rounded-2xl transition-all "
              placeholder="let's search..."
              type="search"
              spellCheck="false"
            />
          </div>

         
        </nav>
      </div>
    </div>
  );
};

export default Searchbar;
