import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { useTheme } from "../use/useTheme";

export default function AppHeader() {
  const { toggleTheme, theme } = useTheme();

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5 p-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-2" />
        <Button
          variant={`outline-${theme === "dark" ? "light" : "dark"}`}
          onClick={toggleTheme}
          className="d-lg-none d-xl-none"
        >
          Toggle Theme
        </Button>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5 gap-lg-5">
            <Nav.Link as={NavLink} to="/">
              All
            </Nav.Link>
            <Nav.Link as={NavLink} to="/completed">
              Completed
            </Nav.Link>
            <Nav.Link as={NavLink} to="/incomplete">
              In progress
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant={`outline-${theme === "dark" ? "light" : "dark"}`}
          onClick={toggleTheme}
          className="d-none d-lg-block"
        >
          Toggle Theme
        </Button>
      </Container>
    </Navbar>
  );
}
