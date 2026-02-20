import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Signin from "../pages/Signin";
import Wishlist from "../pages/Wishlist";
import Mycart from "../pages/Mycart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "signIn", element: <Signin /> },
      { path: "wishList", element: <Wishlist /> },
      { path: "myCart", element: <Mycart /> },
    ],
  },
]);

export default router;
