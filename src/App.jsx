import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Signin from "./components/Signin";
import Wishlist from "./components/Wishlist";
import Mycart from "./components/Mycart";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "signIn", element: <Signin /> },
        { path: "wishList", element: <Wishlist /> },
        { path: "myCart", element: <Mycart /> },
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
