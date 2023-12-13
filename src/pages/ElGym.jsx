import { Card } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import "../styles/app.scss";
import ProfesoresCards from "../components/Profesores/ProfesoresCards";

function ElGym() {
  return (
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <div className="d-flex flex-column align-items-start gap-5 py-5 col-12">
          <div className="page-title border-bottom-celeste ">
            <h2>EL GYM</h2>
          </div>
        </div>
        <div className="d-flex flex-column align-items-start gap-4 py-5 col-12 col-lg-8">
          <h1>
            <span className="celeste">CRC</span> TRAINING
          </h1>
          <p>
            Cycling & Rowing Center (CRC) es un centro de acondicionamiento
            físico especializado, que ofrece una propuesta personalizada con el
            objetivo de llevar la experiencia del deporte a otro nivel. Su
            metodología combina tecnología de última generación con protocolos
            de entrenamiento basados en los estándares de los principales
            centros del primer mundo.
            <br /> <br />
            Ubicado en avenida Italia y Mariscala, tiene una superficie de 1.200
            metros cuadrados distribuidos en tres plantas y brinda opciones para
            personas de todas las edades y condiciones físicas, proponiendo una
            experiencia de deporte integral y profesional para que cada usuario
            alcance su máximo potencial.
            <br /> <br />
            El centro brinda a sus socios asesoramiento inicial a cargo de un
            grupo de profesionales que diseña una propuesta personalizada en
            base a los objetivos de cada usuario, la que puede ser complementada
            con planes de nutrición adecuados a cada necesidad.
            <br /> <br />
            A esto se suma el apoyo de un destacado staff de profesionales del
            deporte, disponible para acompañar el proceso individual de cada
            socio.
            <br /> <br />
            Para generar una experiencia 100% integral, CRC realiza una fuerte
            apuesta a la tecnología aplicada al deporte. En esta línea, entrega
            a cada persona un brazalete que está conectado a la app CRC GYM
            (disponible en IOs y Android), lo que permite acceder a las clases
            de streaming y hacer un seguimiento de los planes de entrenamiento,
            progresos y objetivos cumplidos.
          </p>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-center gap-4 py-5 col-12 text-center">
            <h1>
              STAFF DE <span className="purpura">ÉLITE</span>
            </h1>
            <p className="col-12 col-lg-8">
              Ofrecer un servicio profesional y de calidad es el objetivo de
              CRC. Para ello cuenta con un staff totalmente dedicado al deporte
              integrado por deportistas de elite que han participado en los
              Juegos Olímpicos, licenciados en Educación Física y profesores con
              más de 20 años de experiencia.
            </p>
          </div>
          <div className="d-flex flex-column gap-4">
            <ProfesoresCards />
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column align-items-center gap-4 py-5 mt-5 col-12 text-center">
            <h1>
              SOCIOS <span className="amarillo">ESTRELLAS</span>
            </h1>
            <p className="col-12 col-lg-8">
              CRC brinda a sus socios entrenamientos especializados con
              protocolos basados en los modelos de los principales centros de
              Europa y Estados Unidos. Cada propuesta es personalizada, se
              adapta a las diferentes franjas etarias, a las necesidades de cada
              individuo y a las metas que cada persona desea alcanzar. Acá
              recopilamos a los mejores socios del mes.
            </p>
          </div>
          <div className="d-flex flex-column gap-4">
            <ProfesoresCards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ElGym;
