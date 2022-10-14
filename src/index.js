import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DashInicio } from "/src/view/pages/inicio.jsx";
import { DashProyecto } from "/src/view/pages/proyecto.jsx";
import { DashSeguimiento } from "/src/view/pages/seguimiento.jsx";
import { DashGrafica1 } from "/src/view/pages/grafica1.jsx";
import { DashGrafica2 } from "/src/view/pages/grafica2.jsx";
import { DashPerfil } from "/src/view/pages/perfil.jsx";
import { DashLogin } from "/src/view/pages/login.jsx";
import { DashRecover } from "/src/view/pages/recordar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Pages />
  </StrictMode>
);

function Pages() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<DashInicio />} />
          <Route path="/proyecto" element={<DashProyecto />} />
          <Route path="/seguimiento" element={<DashSeguimiento />} />
          <Route path="/grafica1" element={<DashGrafica1 />} />
          <Route path="/grafica2" element={<DashGrafica2 />} />
          <Route path="/perfil" element={<DashPerfil />} />
          <Route path="/login" element={<DashLogin />} />
          <Route path="/recordar" element={<DashRecover />} />
        </Routes>
      </Router>
    </div>
  );
}
