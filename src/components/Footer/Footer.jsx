// NavBar.jsx
import React from "react";
import logo from "../../assets/crc_logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import "./FooterStyles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap gap-4">
          <div className="d-flex flex-column gap-3 col-12 col-lg">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <p>© 2023 CRC TRAINING - Todos los derechos reservados.</p>
          </div>
          <div className="d-flex gap-3 flex-wrap align-items-center">
            <a href="https://www.facebook.com/crctraining.uy" target="_blank">
              <img src={facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/crctraining.uy/" target="_blank">
              <img src={instagram} alt="Instagram logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
