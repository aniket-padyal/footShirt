import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen ">
        <nav className="w-[90%] py-6 m-auto flex items-center justify-between ">
          <div className="font-bold text-2xl cursor-default ">FootShirts</div>

          <ul className="flex gap-5 ">
            <li>
              <a
                href=""
                className="bg-blue-600 text-white font-bold px-3 py-1.25 rounded-lg hover:border-blue-600 "
              >
                Sign in
              </a>
            </li>
            <li>
              <a href="" className="font-bold  ">
                Wishlist
              </a>
            </li>
            <li>
              <a href="" className="flex items-center gap-1 font-bold ">
                {/* cart svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span>My Cart</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
