import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Products from "@/pages//Products/Products";
import Product from "@/pages/Product";
import Post from "@/pages/Post";
import Login from "@/pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

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
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

export default router;
