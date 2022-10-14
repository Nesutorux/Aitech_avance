//Si funciona no lo muevan////Si funciona no lo muevan//
import React from "react";
import "/src/view/css/styles.css";
import logo from "/src/image/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import { Button } from "@mui/material";

export function Menus() {
  return (
    <div>
      <img src={logo} alt="logo" className="logo" />
      <MInicio />
      <MProyecto />
      <MSeguimiento />
      <MGrafica1 />
      <MGrafica2 />
    </div>
  );
}
function MInicio() {
  return (
    <Button
      color="secondary"
      className="btninicio"
      startIcon={<HomeIcon />}
      onClick={() => (window.location.href = "/")}
    >
      Inicio
    </Button>
  );
}

function MProyecto() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<AssignmentIndIcon />}
      onClick={() => (window.location.href = "/proyecto")}
    >
      Proyecto
    </Button>
  );
}

function MSeguimiento() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<AssignmentIndIcon />}
      onClick={() => (window.location.href = "/seguimiento")}
    >
      Seguimiento
    </Button>
  );
}
function MGrafica1() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<LeaderboardIcon />}
      onClick={() => (window.location.href = "/grafica1")}
    >
      Grafica 1
    </Button>
  );
}
function MGrafica2() {
  return (
    <Button
      color="secondary"
      className="btnmenu"
      startIcon={<LeaderboardIcon />}
      onClick={() => (window.location.href = "/grafica2")}
    >
      Grafica 2
    </Button>
  );
}
