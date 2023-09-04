import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about",
      title: "About",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/post",
      title: "Post",
    }
  ];

  return (
    <>
      <nav>
        <ul>
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;