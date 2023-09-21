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
      title: "Форум",
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