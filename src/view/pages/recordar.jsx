//Si funciona no lo muevan//
import * as React from "react";
import logo from "/src/image/logo.png";
import "/src/view/css/log_recover.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { styled, alpha } from "@mui/material";
import { InputBase } from "@mui/material";

export function DashRecover() {
  return <Recover />;
}

function Recover() {
  return (
    <div className="unionlogin">
      <img src={logo} alt="logo" className="image2" />
      <Recordar />
    </div>
  );
}

function Recordar() {
  return (
    <div className="espacios2">
      <div>
        <Typography variant="h3" className="text2">
          Recuperar Contraseña
        </Typography>
        <br />
        <br />
        <Typography variant="h4" className="text2">
          Ingrese Nombre de Usuario
        </Typography>
        <br />
        <NombreU />
        <br />
        <Button
          onClick={() => (window.location.href = "/login")}
          variant="contained"
          color="error"
          className="btningresar2"
        >
          Enviar
        </Button>
      </div>
    </div>
  );
}

//Informacion utilizada para el input
const InputName = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  backgroundColor: alpha(theme.palette.common.black, 0.12),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25)
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: 450
  }
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));
//Mostrar mensaje para nombre
function NombreU() {
  return (
    <InputName className="text2">
      <StyledInputBase
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputName>
  );
}
