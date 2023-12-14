import { useEffect, useState } from "react";
import "./PlanesCardsStyles.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function PlanesCards() {
  const API_URL = process.env.REACT_APP_API_URL;
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}planes`)
      .then((data) => {
        console.log(data);
        setPlanes(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los planes:", error);
      });
  }, []);

  return (
    <div className="d-flex flex-column gap-5">
      <h1>
        ¡SÉ PARTE DE <br></br> <span className="celeste">LA FAMILIA CRC</span>!
      </h1>
      <div className="d-flex justify-content-between col-12 flex-wrap gap-5">
        {planes.map((plan) => (
          <div
            key={plan.id}
            className="plan-card col"
            style={{ borderColor: plan.color }}
          >
            <span>PAQUETE</span>
            <h2 className="fw-bold" style={{ color: plan.color }}>
              {plan.nombre}
            </h2>
            <h4>{plan.precio}</h4>
            <p>{plan.descripcion}</p>
            <Link to="/registrarse">
              <button
                className="button-md border-radius fw-bold"
                style={{ backgroundColor: plan.color, border: "none" }}
              >
                SUSCRIBIRSE
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanesCards;
