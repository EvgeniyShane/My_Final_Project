import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Products from "@/pages/Products";
import Product from "@/pages/Product";
import Post from "@/pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:id",
    element: <Product />,
  },
  {
    path: "/post",
    element: <Post/>
  }
]);

export default router;
