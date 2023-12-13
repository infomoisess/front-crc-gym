import { useEffect, useState } from "react";
import "./PlanesCardsStyles.scss";
import axios from "axios";

function PlanesCards() {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    axios
      .get("https://backend-crc-gym.onrender.com/planes")
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
          <div key={plan.id} className="plan-card col">
            <span>PAQUETE</span>
            <h3 className="fw-bold">{plan.nombre}</h3>
            <h4>{plan.precio}</h4>
            <p>{plan.descripcion}</p>
            <button className="button-md">SUSCRIBIRSE</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlanesCards;
