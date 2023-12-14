import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Accordion, Collapse } from "react-bootstrap";
import "./HorariosReservasStyles.scss";
import { IoFilter } from "react-icons/io5";
import {
  BiSolidCategory,
  BiSolidChevronDown,
  BiSolidChevronUp,
} from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const HorariosReservas = ({ enPaginaDeReservas }) => {
  const API_URL = process.env.REACT_APP_API_URL;

  const { currentUser } = useContext(AuthContext);
  const [clases, setClases] = useState([]);
  const [reservas, setReservas] = useState([]);
  const [openDays, setOpenDays] = useState({});
  const [diaSeleccionado, setDiaSeleccionado] = useState("Todos");

  const handleToggle = (day) => {
    setOpenDays((prevOpenDays) => ({
      ...prevOpenDays,
      [day]: !prevOpenDays[day],
    }));
  };

  const handleDiaSeleccionado = (dia) => {
    setDiaSeleccionado(dia);
  };

  const handleReservar = async (claseId) => {
    if (!currentUser) {
      alert("Por favor, inicia sesión para realizar una reserva.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}reservas`, {
        usuarioId: currentUser._id,
        claseId,
      });
      alert("Reserva realizada con éxito");
      setReservas([...reservas, response.data]);
    } catch (error) {
      console.error("Error al realizar la reserva:", error);
      alert("Error al realizar la reserva");
    }
  };

  useEffect(() => {
    const fetchClases = async () => {
      try {
        const response = await axios.get(`${API_URL}clases`);
        setClases(response.data);
      } catch (error) {
        console.error("Error al obtener clases:", error);
      }
    };

    fetchClases();
  }, []);

  const dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  return (
    <div className="col-12 d-flex justify-content-center gap-5">
      {/* Intenté filtrar tambien por categoría y funcionaba pero no funcionaba bien en conjunto con los filtros por días y decidí dejar los días */}
      {/* <div className="col-12 col-lg-3 d-flex flex-column gap-4">
        <div className="d-flex gap-2 align-items-center">
          <BiSolidCategory className="text-small" />
          <span className="text-small p-0">Filtrar por disciplina</span>
        </div>
        <div className="d-flex flex-column gap-4">
          {disciplinas.map(([disciplina, colorDisciplina]) => (
            <div
              className="categories-filters"
              style={{
                color: `#${colorDisciplina}`,
                borderColor: `#${colorDisciplina}`,
              }}
              onClick={() => handleDisciplinaSeleccionada(disciplina)}
              key={disciplina}
            >
              <span className="text-medium">{disciplina}</span>
            </div>
          ))}
        </div>
      </div> */}
      <div className="col-12 col-lg-10 d-flex flex-column gap-4">
        <div className="col-12 d-flex justify-content-end gap-2 flex-wrap">
          <div className="d-flex gap-2 align-items-center me-3">
            <IoFilter className="text-small" />
            <span className="text-small p-0">Filtrar por día</span>
          </div>

          <button
            onClick={() => handleDiaSeleccionado("Todos")}
            className={`button-sm ${
              diaSeleccionado === "Todos"
                ? "button-primary"
                : "button-secondary"
            } border-radius`}
          >
            Todos
          </button>
          {dias.map((dia) => (
            <button
              onClick={() => handleDiaSeleccionado(dia)}
              className={`button-sm ${
                diaSeleccionado === dia ? "button-primary" : "button-secondary"
              } border-radius`}
              key={dia}
            >
              {dia}
            </button>
          ))}
        </div>
        <div className="col-12 d-flex flex-column justify-content-end gap-4">
          {dias.map((dia) => (
            <div
              className={`d-flex flex-column gap-4 col-12 ${
                diaSeleccionado !== "Todos" && diaSeleccionado !== dia
                  ? "d-none"
                  : ""
              }`}
              key={dia}
            >
              <div
                className="card cursor-pointer col-12 pt-5"
                onClick={() => handleToggle(dia)}
                aria-controls={`collapse-${dia}`}
                aria-expanded={openDays[dia]}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{dia.toUpperCase()}</h2>
                  {openDays[dia] ? (
                    <BiSolidChevronUp className="arrow-size" />
                  ) : (
                    <BiSolidChevronDown className="arrow-size" />
                  )}
                </div>
              </div>
              <Collapse className="gap-3" in={openDays[dia]}>
                <div id={`collapse-${dia}`} className="card-body">
                  {clases
                    .filter((clase) => clase.diaDeLaSemana === dia)
                    .map((clase) => (
                      <div className="d-flex col-12 justify-content-end">
                        <Card
                          className="col-12 col-lg-10 card-clase"
                          key={clase._id}
                        >
                          <Card.Body className="d-flex flex-column gap-4">
                            <h2>{clase.disciplina}</h2>
                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                              <div className="d-flex gap-4">
                                <div className="d-flex align-items-center gap-2">
                                  <FaRegClock className="text-small" />
                                  <span>{clase.duracion}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                  <LuAlarmClock className="text-small" />
                                  <span>{clase.hora}</span>
                                </div>
                              </div>
                              {enPaginaDeReservas && (
                                <button
                                  className="button button-primary border-radius"
                                  onClick={() => handleReservar(clase._id)}
                                >
                                  Reservar
                                </button>
                              )}
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorariosReservas;
