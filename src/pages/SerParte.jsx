import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import PlanesCards from "../components/Planes/PlanesCards";
import "../styles/app.scss";
import img18 from "../assets/galeria/image18.jpg";
import { useState } from "react";

function SerParte() {
  // *** NOTA: Ir a components/EnviarMail/EnviarMail.js para leer un mensaje ***

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setErrorMessage("Por favor, complete todos los campos.");
      setConfirmationMessage("");
      return;
    }

    if (
      formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setConfirmationMessage("✅ ¡Correo enviado con éxito!");
      setErrorMessage("");
    } else {
      setErrorMessage(
        "❌ Error al enviar el correo. Verifique bien sus datos."
      );
      setConfirmationMessage("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <div className="d-flex flex-column align-items-start py-5 col-12">
          <PlanesCards />
        </div>
        <div className="d-flex justify-content-between gap-5 py-5 col-12 flex-wrap">
          <div className="col-12 col-lg-6">
            <img src={img18} alt="" className="w-100 border-radius" />
          </div>
          <div className="col-12 col-lg d-flex flex-column gap-3">
            <div className="page-title">
              <h2 className="text-nouppercase">
                ¡Comunicate con CRC y entrená con nosotros!
              </h2>
            </div>
            <p>
              En caso de que no te gusten los formularios, puedes escribirnos al
              mail{" "}
              <a className="celeste" href="mailto: contacto@crc.com.uy">
                contacto@crc.com.uy
              </a>
            </p>
            <form
              onSubmit={handleSubmit}
              className="d-flex flex-column align-items-start gap-4"
            >
              <div className="col-12 d-flex gap-4 flex-wrap">
                <div className="col-12 col-lg">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Nombre:"
                    className="w-100"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-lg">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido:"
                    className="w-100"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico:"
                  className="w-100"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  placeholder="Mensaje:"
                  className="w-100"
                  rows={5}
                  wrap="soft"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex col-12 justify-content-end justify-content-lg-start">
                <button
                  className="button button-lg button-primary"
                  type="submit"
                >
                  ENVIAR
                </button>
              </div>
            </form>
            {confirmationMessage && <p>{confirmationMessage}</p>}
            {errorMessage && <p>{errorMessage}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SerParte;
