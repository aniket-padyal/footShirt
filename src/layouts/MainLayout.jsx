import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Searchbar from "../components/layout/Searchbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
