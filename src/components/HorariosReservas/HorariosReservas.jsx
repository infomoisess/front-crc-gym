import React, { useState } from "react";
import { Card, Button, Accordion, Collapse } from "react-bootstrap";
import "./HorariosReservasStyles.scss";
import { IoFilter } from "react-icons/io5";
import {
  BiSolidCategory,
  BiSolidChevronDown,
  BiSolidChevronUp,
} from "react-icons/bi";

const HorariosReservas = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-12 d-flex gap-5">
      <div className="col-12 col-lg-4 d-flex flex-column gap-4">
        <div className="d-flex gap-2 align-items-center">
          <BiSolidCategory className="text-small" />
          <span className="text-small p-0">Filtrar por categoría</span>
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="categories-filters">
            <span className="text-medium">ENTRENAMIENTO FUNCIONAL</span>
          </div>
          <div className="categories-filters">
            <span className="text-medium">ENTRENAMIENTO FUNCIONAL</span>
          </div>
          <div className="categories-filters">
            <span className="text-medium">ENTRENAMIENTO FUNCIONAL</span>
          </div>
          <div className="categories-filters">
            <span className="text-medium">ENTRENAMIENTO FUNCIONAL</span>
          </div>
        </div>
      </div>
      <div className="col d-flex flex-column gap-4">
        <div className="col-12 d-flex justify-content-end gap-2">
          <div className="d-flex gap-2 align-items-center me-3">
            <IoFilter className="text-small" />
            <span className="text-small p-0">Filtrar por día</span>
          </div>
          <button className="button-sm button-secondary border-radius">
            Todos
          </button>
          <button className="button-sm button-secondary border-radius">
            Lunes
          </button>
          <button className="button-sm button-secondary border-radius">
            Martes
          </button>
          <button className="button-sm button-secondary border-radius">
            Miércoles
          </button>
          <button className="button-sm button-secondary border-radius">
            Jueves
          </button>
          <button className="button-sm button-secondary border-radius">
            Viernes
          </button>
          <button className="button-sm button-secondary border-radius">
            Sábado
          </button>
          <button className="button-sm button-secondary border-radius">
            Domingo
          </button>
        </div>
        <div className="col-12 d-flex justify-content-end gap-2">
          <div className="d-flex flex-column gap-3 col-12">
            <div
              className="card cursor-pointer col-12 pt-5"
              onClick={handleToggle}
              aria-controls="collapseExample"
              aria-expanded={isOpen}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h2>LUNES</h2>
                {isOpen ? (
                  <BiSolidChevronUp className="arrow-size" />
                ) : (
                  <BiSolidChevronDown className="arrow-size" />
                )}
              </div>
            </div>
            <Collapse in={isOpen}>
              <div id="collapseExample" className=" card-body">
                Some placeholder content for the collapse component. This panel
                is hidden by default but revealed when the user activates the
                relevant trigger.
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorariosReservas;
