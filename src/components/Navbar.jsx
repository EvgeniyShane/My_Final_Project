import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const routes = [
    {
      path: "/",
      title: "Главная",
    },
    {
      path: "/products",
      title: "Игры",
    },
    {
      path: "/post",
      title: "Статьи",
    },
    {
      path: "/login",
      title: "Вход",
    },
    {
      path: "/profile",
      title: "Профиль",
    },
  ];

  return (
    <>
      <nav>
        <ul>
          {routes.map((route, idx) => {
            return (
              <li key={idx}>
                {route.path === "/login" || route.path === "/register" ? (
                  <Link to={route.path}>{route.title}</Link>
                ) : (
                  <Link to={route.path}>{route.title}</Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;