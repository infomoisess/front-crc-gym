import React, { useContext, useEffect, useState } from "react";
import "../styles/app.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HorariosReservas from "../components/HorariosReservas/HorariosReservas";
import { Card } from "react-bootstrap";
import axios from "axios";

function Reservas() {
  const API_URL = process.env.REACT_APP_API_URL;

  const { currentUser } = useContext(AuthContext);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const cargarReservas = async () => {
      try {
        const response = await axios.get(
          `${API_URL}reservas/${currentUser._id}`
        );
        setReservas(response.data);
      } catch (error) {
        console.error("Error al cargar reservas:", error);
      }
    };

    if (currentUser) {
      cargarReservas();
    }
  }, [currentUser]);

  const cancelarReserva = async (reservaId) => {
    try {
      await axios.delete(`${API_URL}reservas/${reservaId}`);
      setReservas(reservas.filter((reserva) => reserva._id !== reservaId));
    } catch (error) {
      console.error("Error al cancelar la reserva:", error);
    }
  };

  return (
    <>
      {currentUser ? (
        <div className="container-fluid">
          <div className="container">
            <NavBar />
            <div className="d-flex flex-column align-items-start gap-5 py-5 col-12">
              <div className="page-title border-bottom-celeste ">
                <h2>RESERVAS</h2>
              </div>
              <div className="d-flex flex-column gap-4 col-12">
                <h4>MIS RESERVAS:</h4>
                {reservas.map((reserva) => (
                  <div
                    className="d-flex col-12 justify-content-center"
                    key={reserva._id}
                  >
                    <Card className="col-12 col-lg-10 card-clase">
                      <Card.Body className="d-flex flex-column gap-4">
                        <h2>{reserva.clase.disciplina}</h2>

                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                          <div className="d-flex gap-3">
                            <div className="d-flex gap-2">
                              <span>{reserva.clase.duracion}</span>
                            </div>
                            <div className="d-flex gap-2">
                              <span>{reserva.clase.hora}</span>
                            </div>
                          </div>
                          <button
                            className="button button-secondary border-radius"
                            onClick={() => cancelarReserva(reserva._id)}
                          >
                            Cancelar reserva
                          </button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
              <HorariosReservas enPaginaDeReservas={true} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <div className="container-fluid">
          <div className="minHeight-100">
            <div className="img_float_background overflow-hidden" />
            <div className="container">
              <NavBar />
              <div className="d-flex flex-column align-items-start gap-3 py-5 col-12 col-lg-6">
                <div className="page-title">
                  <h2 className="text-nouppercase">
                    Por favor <span className="celeste">inicia sesión</span>{" "}
                    para acceder a tus reservas
                  </h2>
                </div>
                <Link to="/iniciarsesion">
                  <button className="button button-lg button-primary">
                    INICIAR SESIÓN
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Reservas;
