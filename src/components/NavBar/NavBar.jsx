import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../assets/crc_logo.png";
import "./NavBarStyles.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const NavBar = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [planColor, setPlanColor] = useState();
  const { currentUser, logout } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser && currentUser.planId) {
      const fetchPlanColor = async () => {
        try {
          const response = await axios.get(
            `${API_URL}planes/${currentUser.planId}`
          );
          setPlanColor(response.data.color);
        } catch (error) {
          console.error("Error al obtener color del plan:", error);
        }
      };

      fetchPlanColor();
    }
  }, [currentUser]);

  const initial = currentUser
    ? currentUser.firstName.charAt(0).toUpperCase()
    : "";

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
          className=" gap-5 justify-content-lg-end"
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
            {currentUser ? (
              <>
                <div className="d-flex align-items-center gap-3">
                  <div className="d-none d-lg-block line" />
                  <Link to="/miperfil">
                    <div
                      className="user-circle"
                      style={{ borderColor: planColor }}
                    >
                      {initial}
                    </div>
                  </Link>

                  <button
                    className="button button-sm button-red"
                    onClick={logout}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
