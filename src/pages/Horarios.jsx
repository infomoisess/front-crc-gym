import Footer from "../components/Footer/Footer";
import HorariosReservas from "../components/HorariosReservas/HorariosReservas";
import NavBar from "../components/NavBar/NavBar";
import "../styles/app.scss";
import { BiSolidCategory } from "react-icons/bi";
import { IoFilter } from "react-icons/io5";

function Horarios() {
  return (
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <div className="d-flex flex-column align-items-start gap-5 py-5 col-12">
          <div className="page-title border-bottom-celeste ">
            <h2>HORARIOS</h2>
          </div>
          <HorariosReservas />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Horarios;
