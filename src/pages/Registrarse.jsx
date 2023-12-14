import "../styles/app.scss";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login, register } from "../services/authService";

function Registrarse() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSeleccionPaquete = (e) => {
    setPaqueteSeleccionado(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paqueteSeleccionado) {
      alert("Por favor, selecciona un paquete.");
      setErrorMessage("Por favor, selecciona un paquete.");
      return;
    }

    try {
      const response = await register(
        firstName,
        lastName,
        email,
        password,
        paqueteSeleccionado
      );
      console.log(response);

      if (response.message === "Usuario registrado") {
        navigate("/iniciarsesion");
      } else {
        setErrorMessage("Hubo un error. Por favor verifique bien sus datos");
      }
    } catch (registrationError) {
      console.error("Error al registrarse:", registrationError);
      setErrorMessage(
        "Error al registrarse. Por favor verifique bien sus datos."
      );
    }
  };

  return (
    <div className="container-fluid">
      <div className="minHeight-100">
        <div className="img_float_background_2 overflow-hidden" />
        <div className="container">
          <NavBar />
          <div className="d-flex flex-column align-items-start gap-4 py-5 col-12">
            <h1>REGISTRO</h1>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-start gap-4 col-12 col-lg-5 login"
            >
              <div className="col-12">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Nombre"
                  className="w-100"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Apellido"
                  className="w-100"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  className="w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="w-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* No pude hacer que funcionara el repeterir contraseña y que estas se comparen entre sí */}
              {/* <div className="col-12">
                <input
                  type="password"
                  name="passwordRepeat"
                  placeholder="Repetir contraseña"
                  className="w-100"
                  value={passwordRepeat}
                  onChange={(e) => setPasswordRepeat(e.target.value)}
                />
              </div> */}
              <div className="col-12 d-flex gap-3 align-items-center">
                <span className="me-1 text-medium">Seleccionar paquete:</span>
                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="654668a8b7a5a111259f467b"
                    checked={paqueteSeleccionado === "654668a8b7a5a111259f467b"}
                    onChange={handleSeleccionPaquete}
                  />
                  <span className="gris fw-bold text-small">PLATA</span>
                </label>

                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="654ac4fb8c45621691ae3ece"
                    checked={paqueteSeleccionado === "654ac4fb8c45621691ae3ece"}
                    onChange={handleSeleccionPaquete}
                  />
                  <span className="amarillo fw-bold text-small">ORO</span>
                </label>

                <label className="d-flex align-items-center gap-1">
                  <input
                    type="radio"
                    name="paquete"
                    value="654ac5218c45621691ae3ecf"
                    checked={paqueteSeleccionado === "654ac5218c45621691ae3ecf"}
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
              {errorMessage && (
                <div className="error-message">{errorMessage}</div>
              )}
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
