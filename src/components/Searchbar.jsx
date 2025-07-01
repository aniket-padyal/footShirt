import React from "react";

const Searchbar = () => {
  return (
    <div>
      <div className="w-screen border ">
        <nav className="w-[90%] py-3.5 m-auto flex items-center justify-between cursor-default border ">
          <div className="w-60 flex items-center ml-4 pl-2 border-2 rounded-4xl  hover:border-blue-500  transition-all  ">
            {/* search svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              className="w-full px-2 py-1.5 outline-none font-bold rounded-2xl transition-all "
              type="search"
              spellCheck="false"
            />
          </div>

          {/* hamburger svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 sm:hidden "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <ul className="flex font-bold gap-5 max-sm:hidden ">
            <li className="hover:text-blue-600 transition-all ">
              <a href="">Discover</a>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <a href="">Browse</a>
            </li>
            <li className="hover:text-blue-600 transition-all ">
              <a href="">News</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Searchbar;
