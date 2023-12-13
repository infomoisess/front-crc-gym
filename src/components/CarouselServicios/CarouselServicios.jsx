import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";
import "./CarouselServiciosStyles.scss";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";

const CarouselServicios = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 < 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1 > 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="d-flex flex-column gap-5">
      <div className="d-flex justify-content-between align-items-center col-12">
        <h2>
          Nuestros <span className="celeste">servicios</span>
        </h2>
        <div className="d-flex justify-content-end gap-3 button-arrows">
          <Button onClick={handlePrev}>
            <LuChevronLeftCircle />
          </Button>{" "}
          <Button onClick={handleNext}>
            <LuChevronRightCircle />
          </Button>
        </div>
      </div>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        nextIcon={null}
        prevIcon={null}
        indicators={false}
        interval={null}
      >
        <Carousel.Item>
          <div className="d-flex justify-content-between gap-4 flex-wrap">
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>ENTRENAMIENTO FUNCIONAL</h3>
                </Card.Title>
                <Card.Text>
                  Esta actividad tiene como objetivo mejorar la calidad de vida
                  a través de la optimización de las capacidades condicionales
                  de fuerza, resistencia, velocidad y flexibilidad
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>POWER FUNCTIONAL TRAINING (PFT)</h3>
                </Card.Title>
                <Card.Text>
                  POWER FUNCTIONAL TRAINING (PFT) Esta actividad tiene como
                  objetivo mejorar la calidad de vida a través de la
                  optimización de las capacidades condicionales de fuerza,
                  resistencia, velocidad y flexibilidad
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>WELLNESS FUNCTIONAL TRAINING (WFT)</h3>
                </Card.Title>
                <Card.Text>
                  En esta propuesta cada ejercicio y cada clase es una
                  evaluación. El plan apunta a que las personas puedan moverse
                  mejor y sentirse más saludables. Para ello trabaja desde las
                  bases de la calidad del movimiento empezando por los patrones
                  respiratorios, movilidad, estabilidad, control motor, fuerza y
                  resistencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between gap-4 flex-wrap">
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>HIGH INTENSITY INTERVAL TRAINING (HIIT)</h3>
                </Card.Title>
                <Card.Text>
                  HIIT es un protocolo de entrenamiento en el que se realizan
                  intervalos cortos de ejercicios de alta intensidad
                  intercalados con periodos de recuperación o ejercicios de baja
                  intensidad.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>INDOOR ROWING</h3>
                </Card.Title>
                <Card.Text>
                  Se trata de uno de los deportes más completos dada su
                  importante implicación muscular y sus grandes demandas en
                  cuanto a resistencia. Es un modo suave de entrenar y un
                  ejercicio de bajo impacto ya que no implica movimientos
                  bruscos. Se adapta a todas las edades y su realización
                  involucra a todo el cuerpo en el entrenamiento.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>POWER ROWING</h3>
                </Card.Title>
                <Card.Text>
                  Power Rowing es un nuevo concepto de entrenamiento que unifica
                  los beneficios de Indoor Rowing y HIIT. Es una actividad con
                  intervalos de corta duración y alta intensidad que combina
                  fuerza y resistencia.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-between gap-4 flex-wrap">
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>CYCLING</h3>
                </Card.Title>
                <Card.Text>
                  Group Cycle de Technogym es una actividad cardiovascular que
                  permite quemar hasta 700 calorías en cada sesión, tonificar
                  piernas, glúteos y abdomen. Es un ejercicio de bajo impacto
                  apto para todo público que, al ritmo de la música y motivado
                  por el coach, favorece la liberación del estrés y genera alta
                  energía, a la vez que trabaja la modelación del cuerpo.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>TRAINING</h3>
                </Card.Title>
                <Card.Text>
                  Propone una combinación novedosa que intercala de forma
                  dinámica ciclos de pedaleo con ejercicios de tren superior,
                  incorporando el uso de mancuernas. Es un tipo de entrenamiento
                  integral que mejora el rendimiento aeróbico, la resistencia y
                  la coordinación.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="col-12 col-lg">
              <Card.Body>
                <Card.Title>
                  <h3>STRETCHING</h3>
                </Card.Title>
                <Card.Text>
                  El propósito de este entrenamiento es aumentar la
                  flexibilidad, mejorar la eficiencia articular, optimizar la
                  capacidad respiratoria y beneficiar el rendimiento total del
                  cuerpo.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselServicios;
