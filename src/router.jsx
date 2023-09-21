import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Products from "@/pages//Products/Products";
import Product from "@/pages/Product";
import Post from "@/pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
