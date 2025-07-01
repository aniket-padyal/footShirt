import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen border ">
        <nav className="w-[90%] py-3.5 m-auto flex items-center justify-between  border ">
          <div className="font-bold text-2xl cursor-default ">Foot Shirts</div>

          <ul className="flex gap-4 border ">
            <li  >Home</li>
            <li  >Contact</li>
            <li  >About</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
