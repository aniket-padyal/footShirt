import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Discover from "../pages/Discover";
import Signin from "../pages/Signin";
import Wishlist from "../pages/Wishlist";
import Mycart from "../pages/Mycart";
import Browse from "../pages/Browse";
import News from "../pages/News";

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

export default router;
