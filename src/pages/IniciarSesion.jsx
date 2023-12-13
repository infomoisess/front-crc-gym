import "../styles/app.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function IniciarSesion() {
  return (
    <div className="container-fluid">
      <div className="minHeight-100">
        <div className="img_float_background_2 overflow-hidden" />
        <div className="container">
          <NavBar />
          <div className="d-flex flex-column align-items-start gap-4 py-5 col-12">
            <h1>INICIAR SESIÓN</h1>
            <form className="d-flex flex-column align-items-start gap-4 col-12 col-lg-4 login">
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
              <p className="mt-2 mb-4 text-small">
                ¿No tienes cuenta?{" "}
                <Link className="celeste" to="/registrarse">
                  Registrate aquí
                </Link>
              </p>
              <button
                className="button button-lg button-primary w-100"
                type="submit"
              >
                INICIAR SESIÓN
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IniciarSesion;
