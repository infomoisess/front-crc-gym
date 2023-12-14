import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function MiPerfil() {
  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(AuthContext);
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchPlanDetails = async () => {
      if (currentUser && currentUser.planId) {
        try {
          const response = await axios.get(
            `${API_URL}planes/${currentUser.planId}`
          );
          console.log("Datos del plan:", response.data);
          setPlan(response.data);
        } catch (error) {
          console.error("Error al obtener detalles del plan:", error);
        }
      }
    };

    fetchPlanDetails();
  }, [currentUser]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="minHeight-100">
        <div className="img_float_background overflow-hidden" />
        <div className="container">
          <NavBar />
          <div className="d-flex flex-column align-items-start gap-3 py-5 col-12">
            <div className="page-title border-bottom-celeste ">
              <h2>MI PERFIL</h2>
            </div>
            <div className="d-flex flex-column col-12 py-5 gap-2 justify-content-center align-items-center">
              <span className="username">
                Hola,{" "}
                {currentUser ? (
                  currentUser.firstName
                ) : (
                  <span>
                    por favor{" "}
                    <Link className="celeste" to="/iniciarsesion">
                      inicie sesión
                    </Link>
                  </span>
                )}
              </span>
              <span
                style={{ backgroundColor: plan ? plan.color : "#fff" }}
                className="paquete"
              >
                Paquete{" "}
                <span className="fw-bold">
                  {plan ? plan.nombre : "No asignado"}
                </span>
              </span>
              <div className="horizontal-line" />
              <button
                className="button button-sm button-red"
                onClick={handleLogout}
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MiPerfil;
