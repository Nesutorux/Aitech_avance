//Si funciona no lo muevan//
import * as React from "react";
import logo from "/src/image/logo.png";
import { Avatar } from "@mui/material";
import "/src/view/css/log_recover.css";
import { Icon } from "atomize";
import { Typography } from "@mui/material";
import { styled, alpha } from "@mui/material";
import { InputBase } from "@mui/material";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Link } from "@mui/material/";

export function DashLogin() {
  return <Login />;
}
//Union de informacion con la imagen
function Login() {
  return (
    <div className="unionlogin">
      <Nombre />
      <img src={logo} alt="logo" className="image" />
    </div>
  );
}

//Union de toda la informacion
function Nombre() {
  return (
    <div className="espacios">
      <div className="user">
        <Avatar sx={{ width: 200, height: 200 }}>
          <Icon name="UserSolid" />
        </Avatar>
      </div>
      <div>
        <Typography variant="h4" className="text">
          Nombre de Usuario
        </Typography>
        <br />
        <NombreU />
        <br />
        <Typography variant="h4" className="text">
          Contraseña
        </Typography>
        <br />
        <ContraseñaU />
        <div className="unionlogin">
          <Link
            onClick={() => (window.location.href = "/recordar")}
            className="textlink"
          >
            Recuperar Contraseña
          </Link>
          <Recordar />
        </div>
        <br />
        <Button
          onClick={() => (window.location.href = "/")}
          variant="contained"
          color="error"
          className="btningresar"
        >
          Ingresar
        </Button>
      </div>
    </div>
  );
}
//Radio Gruop (recordar contraseña)
function Recordar() {
  const [value, setValue] = React.useState("save");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <RadioGroup
      aria-labelledby="demo-controlled-radio-buttons-group"
      name="controlled-radio-buttons-group"
      value={value}
      onChange={handleChange}
    >
      <FormControlLabel
        value="save"
        control={<Radio />}
        label="Recordar Contraseña"
      />
    </RadioGroup>
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
    marginLeft: theme.spacing(4),
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
    <InputName className="text">
      <StyledInputBase
        placeholder="Ingrese Nombre Usuario"
        inputProps={{ "aria-label": "search" }}
      />
    </InputName>
  );
}

//Mostrar mensaje para contraseña
function ContraseñaU() {
  return (
    <InputName className="text">
      <StyledInputBase
        placeholder="Ingrese Contraseña"
        inputProps={{ "aria-label": "search" }}
      />
    </InputName>
  );
}
