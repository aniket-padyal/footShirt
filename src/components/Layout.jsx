import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Searchbar/>
      <Outlet />
    </div>
  );
};

export default Layout;
