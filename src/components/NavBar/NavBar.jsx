// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/crc_logo.png";
import "./NavBarStyles.scss";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className=" gap-4 justify-content-lg-end"
        >
          <Nav className="ml-auto gap-3">
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/horarios">
              HORARIOS
            </Nav.Link>
            <Nav.Link as={Link} to="/galeria">
              GALERÍA
            </Nav.Link>
            <Nav.Link as={Link} to="/elgym">
              EL GYM
            </Nav.Link>
            <Nav.Link as={Link} to="/reservas">
              RESERVAS
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto gap-3 mt-4 mt-lg-0">
            <Link to="/iniciarsesion">
              <button className="button button-md button-secondary">
                INICIAR SESIÓN
              </button>
            </Link>

            <Link to="/serparte">
              <button className="button button-md button-primary">
                SER PARTE
              </button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
