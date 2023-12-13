import imgHeader from "../assets/image0.jpg";
import InstagramWidget from "../components/InstagramWidget/InstagramWidget";
import NavBar from "../components/NavBar/NavBar";
import "../styles/app.scss";
import ff from "../assets/ff.png";
import underArmour from "../assets/under-armour.png";
import gatorade from "../assets/gatorade.png";
import technogym from "../assets/technogym.png";
import casio from "../assets/casio.png";
import img1 from "../assets/galeria/image1.jpg";
import img2 from "../assets/galeria/image2.jpg";
import img3 from "../assets/galeria/image3.jpg";
import img4 from "../assets/galeria/image4.jpg";
import img5 from "../assets/galeria/image5.jpg";
import CarouselServicios from "../components/CarouselServicios/CarouselServicios";
import GoogleReviews from "../components/GoogleReviews/GoogleReviews";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="container overflow-hidden">
        <NavBar />
        <img
          src={imgHeader}
          alt="Imagen de un hombre haciendo ejercicio"
          className="img_float"
        />
        <div className="d-flex flex-column justify-content-center home-header mb-5">
          <div className="col-8 d-flex flex-column justify-content-center align-items-start gap-3">
            <h1>
              La experiencia del deporte a{" "}
              <span className="celeste">otro nivel</span>.
            </h1>
            <p className="col-10">
              Enfocado en innovación, tecnología, experiencia, modernidad y
              desempeño. CRC, entra en un nuevo momento, con equipos e
              infraestructura moderna.
            </p>
            <Link to="/serparte">
              <button className="button button-lg button-primary">
                VIVÍ LA EXPERIENCIA CRC
              </button>
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-between gap-5 logo-section flex-wrap">
          <img src={underArmour} alt="" className="logo-sponsor" />
          <img src={ff} alt="" className="logo-sponsor" />
          <img src={casio} alt="" className="logo-sponsor" />
          <img src={gatorade} alt="" className="logo-sponsor" />
          <img src={technogym} alt="" className="logo-sponsor" />
        </div>

        <div className="d-flex flex-column justify-content-center align-items-left gap-5 py-5 col-12">
          <CarouselServicios />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-left gap-5 py-5 col-12">
          <div className="d-flex flex-column gap-4">
            <h2>
              Galería de las <span className="celeste">instalaciones</span>
            </h2>
            <div className="d-flex gap-4 col-12 flex-wrap flex-lg-nowrap">
              <div className="d-flex flex-column col-12 col-lg-7 gap-4">
                <img src={img1} alt="" className="border-radius" />
                <div className="d-flex gap-4 col-12">
                  <div className="col-6 d-flex justify-content-center h-100 border-radius overflow-hidden">
                    <img src={img4} alt="" className="w-100" />
                  </div>
                  <div className="col h-100">
                    <img src={img5} alt="" className="w-100 border-radius" />
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column col-12 col-lg-5 gap-4 overflow-hidden">
                <img src={img2} alt="" className="border-radius" />
                <div className="d-flex justify-content-center h-100 border-radius overflow-hidden">
                  <img src={img3} alt="" className="w-100" />
                </div>
              </div>
            </div>
            <Link to="/galeria">
              <button className="button button-lg button-primary">
                VER MÁS
              </button>
            </Link>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-left gap-5 py-5 col-12">
          {/* Embed de Instagram */}
          <div className="d-flex flex-column gap-4">
            <h2>
              Las últimas <span className="celeste">noticias</span> de la
              comunidad
            </h2>
            <InstagramWidget />
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-left gap-4 py-5 col-12">
          <h2>¿qué opinan nuestros clientes?</h2>
          <GoogleReviews />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
