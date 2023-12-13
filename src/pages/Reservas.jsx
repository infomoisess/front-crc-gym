import "../styles/app.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function Reservas() {
  return (
    <div className="container-fluid">
      <div className="minHeight-100">
        <div className="img_float_background overflow-hidden" />
        <div className="container">
          <NavBar />
          <div className="d-flex flex-column align-items-start gap-3 py-5 col-12 col-lg-6">
            <div className="page-title">
              <h2 className="text-nouppercase">
                Por favor <span className="celeste">inicia sesión</span> para
                acceder a tus reservas
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
  );
}

export default Reservas;
