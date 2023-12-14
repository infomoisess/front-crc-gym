import { useEffect, useState } from "react";
import "./ProfesoresCardsStyles.scss";
import axios from "axios";
import { Card } from "react-bootstrap";

function ProfesoresCards() {
  const [profesores, setProfesores] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API_URL}profesores`)
      .then((data) => {
        console.log(data);
        setProfesores(data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los profesores:", error);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {profesores.map((profesor) => (
        <div className="col-12 col-lg-3 p-4">
          <Card key={profesor.id} className="h-100 profesor-card">
            <Card.Body className="text-center">
              <Card.Title className="d-flex flex-column align-items-center gap-3">
                <div className="profesor-img">
                  <img src={profesor.imagen} alt="" />
                </div>
                <h3 className="w-100 text-center">{profesor.nombre}</h3>
              </Card.Title>
              <Card.Text>
                <p className="fw-bold">{profesor.especialidad}</p>
                <p>{profesor.descripcion}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProfesoresCards;
