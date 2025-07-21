import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Signin from "./components/Signin";
import Wishlist from "./components/Wishlist";
import Mycart from "./components/Mycart";
import Discover from "./components/Discover";
import Browse from "./components/Browse";
import News from "./components/News";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Discover /> },
        { path: "signIn", element: <Signin /> },
        { path: "wishList", element: <Wishlist /> },
        { path: "myCart", element: <Mycart /> },
        { path: "browse", element: <Browse /> },
        { path: "news", element: <News /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
