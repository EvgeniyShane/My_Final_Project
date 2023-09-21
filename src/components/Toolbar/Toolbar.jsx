import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Toolbar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        {/* <img src="src/assets/logo.svg" alt=""></img> */}
        <Navbar.Brand href="/">Главная</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Игры</Nav.Link>
          <Nav.Link>Форум</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
