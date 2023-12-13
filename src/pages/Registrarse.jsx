import "../styles/app.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

function Registrarse() {
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState("");

  const handleSeleccionPaquete = (e) => {
    setPaqueteSeleccionado(e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="minHeight-100">
        <div className="img_float_background_2 overflow-hidden" />
        <div className="container">
          <NavBar />
          <div className="d-flex flex-column align-items-start gap-4 py-5 col-12">
            <h1>REGISTRO</h1>
            <form className="d-flex flex-column align-items-start gap-4 col-12 col-lg-5 login">
              <div className="col-12">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  className="w-100"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  className="w-100"
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  className="w-100"
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="w-100"
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  name="password"
                  placeholder="Repetir contraseña"
                  className="w-100"
                />
              </div>

              <div className="col-12 d-flex gap-3">
                <span className="me-1 text-medium">Seleccionar paquete:</span>
                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="PLATA"
                    checked={paqueteSeleccionado === "PLATA"}
                    onChange={handleSeleccionPaquete}
                  />
                  <span className="gris fw-bold text-small">PLATA</span>
                </label>

                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="ORO"
                    checked={paqueteSeleccionado === "ORO"}
                    onChange={handleSeleccionPaquete}
                  />

                  <span className="amarillo fw-bold text-small">ORO</span>
                </label>

                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="DIAMANTE"
                    checked={paqueteSeleccionado === "DIAMANTE"}
                    onChange={handleSeleccionPaquete}
                  />
                  <span className="celeste fw-bold text-small">DIAMANTE</span>
                </label>
              </div>
              <p className="mt-2 mb-4 text-small">
                ¿Ya tienes una cuenta?{" "}
                <Link className="celeste" to="/iniciarsesion">
                  Inicia sesión aquí
                </Link>
              </p>
              <button
                className="button button-lg button-primary w-100"
                type="submit"
              >
                REGISTRARSE
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registrarse;
