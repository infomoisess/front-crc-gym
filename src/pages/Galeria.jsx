import NavBar from "../components/NavBar/NavBar";
import "../styles/app.scss";
import img1 from "../assets/galeria/image1.jpg";
import img2 from "../assets/galeria/image2.jpg";
import img3 from "../assets/galeria/image3.jpg";
import img4 from "../assets/galeria/image4.jpg";
import img5 from "../assets/galeria/image5.jpg";
import img6 from "../assets/galeria/image6.jpg";
import img7 from "../assets/galeria/image7.jpg";
import img8 from "../assets/galeria/image8.jpg";
import img9 from "../assets/galeria/image9.jpg";
import img10 from "../assets/galeria/image10.jpg";
import img11 from "../assets/galeria/image11.jpg";
import img12 from "../assets/galeria/image12.jpg";
import img13 from "../assets/galeria/image13.jpg";
import img14 from "../assets/galeria/image14.jpg";
import Footer from "../components/Footer/Footer";

function Galeria() {
  return (
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <div className="d-flex flex-column align-items-start gap-5 py-5 col-12">
          <div className="page-title border-bottom-celeste ">
            <h2>GALERÍA</h2>
          </div>
          <div className="d-flex gap-4 flex-column col-12">
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
              <div className="d-flex flex-column col-12 col-lg-5 gap-4">
                <img src={img2} alt="" className="border-radius" />
                <div className="d-flex justify-content-center h-100 border-radius overflow-hidden">
                  <img src={img3} alt="" className="w-100" />
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-4 col-12">
              <div className="d-flex col-12 gap-4 flex-wrap flex-lg-nowrap">
                <div className="col-12 col-lg-5 d-flex justify-content-end overflow-hidden border-radius">
                  <img src={img6} alt="" className="h-100" />
                </div>
                <div className="col-12 col-lg-7">
                  <img src={img7} alt="" className="border-radius w-100" />
                </div>
              </div>
              <div className="d-flex col-12 gap-4 flex-wrap flex-lg-nowrap">
                <div className="col-12 col-lg-7">
                  <img
                    src={img8}
                    alt=""
                    className="border-radius w-100 h-100"
                  />
                </div>
                <div className="col-12 col-lg-5 d-flex justify-content-center overflow-hidden border-radius">
                  <img src={img9} alt="" className="h-100" />
                </div>
              </div>
            </div>
            <div className="d-flex gap-4 col-12 flex-wrap flex-lg-nowrap">
              <div className="d-flex flex-column col-12 col-lg-7 gap-4">
                <div className="d-flex gap-4 col-12">
                  <div className="col-12 col-lg-6 d-flex justify-content-center overflow-hidden">
                    <img src={img10} alt="" className=" border-radius" />
                  </div>
                  <div className="col">
                    <img
                      src={img11}
                      alt=""
                      className=" h-100 w-100 border-radius"
                    />
                  </div>
                </div>
                <img src={img13} alt="" className="border-radius" />
              </div>
              <div className="d-flex flex-column col-12 col-lg-5 flex-wrap flex-lg-nowrap gap-4">
                <div className="col-12 d-flex justify-content-center border-radius overflow-hidden">
                  <img src={img12} alt="" />
                </div>

                <div className="col-12 d-flex justify-content-center border-radius overflow-hidden">
                  <img src={img14} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Galeria;
