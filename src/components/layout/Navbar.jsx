import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartDrawer from "../../pages/Mycart";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="w-screen ">
        <nav className="w-[90%] sm:w-[85%] py-5 m-auto flex items-center justify-between ">
          <Link
            className="font-bold text-3xl hover:text-blue-600 transition-all "
            to="/"
          >
            FootShirts
          </Link>

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

          <ul className="hidden sm:flex gap-6 ">
            <li>
              <Link
                to="/signIn"
                className="bg-blue-600 text-white border-3 border-transparent font-bold px-4 py-1.75 rounded-lg hover:border-blue-600 hover:text-black hover:bg-[rgb(225, 225, 225);] transition-all "
              >
                Sign in
              </Link>
            </li>

            <li>
              <Link
                to="/wishList"
                className="font-bold hover:text-pink-600 transition-all "
              >
                Wishlist
              </Link>
            </li>

            <li>
              <Link
                to="/myCart"
                className="flex items-center gap-1 font-bold relative hover:text-blue-600 transition-all "
                onClick={toggleCart}
              >
                {/* cart svg */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <span>My Cart</span>
              </Link>
            </li>
          </ul>
        </nav>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </div>
  );
};

export default Navbar;
