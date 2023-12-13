import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Galeria from "./pages/Galeria";
import Horarios from "./pages/Horarios";
import ElGym from "./pages/ElGym";
import Reservas from "./pages/Reservas";
import IniciarSesion from "./pages/IniciarSesion";
import Registrarse from "./pages/Registrarse";
import SerParte from "./pages/SerParte";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/elgym" element={<ElGym />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/iniciarsesion" element={<IniciarSesion />} />
      <Route path="/registrarse" element={<Registrarse />} />
      <Route path="/serparte" element={<SerParte />} />
    </Routes>
  );
};

export default App;
