//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/grafica_bar_pas.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";
import {
  Pastel1,
  Pastel2,
  Pastel3,
  Pastel4
} from "/src/view/section/grafica_pastel.jsx";

export function DashGrafica2() {
  return <Pastel />;
}
//Generacion y Estructura del Dash
function Pastel() {
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-graphics screen">
        <div className="fondo">
          <div className="barmenu">
            <Menus />
          </div>
          <ul>
            <Seccion />
            <div className="areatrabajo">
              <AreaPas />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
/*  
   Area generada en columnas para tener en una sola linea,
   el buscador, notificacion, mensajes, configuracion y perfil
*/
function Seccion() {
  return (
    <div className="unionup">
      <Buscador />
      <AccountNotification />
      <AccountMessage />
      <AccountProfile />
    </div>
  );
}
//Seccion de Area de Trabajo
function AreaPas() {
  return (
    <div>
      <div clasName="scroll-grafica">
        <div className="unionbarra">
          <div className="pastel1">
            <Pastel1 />
          </div>
          <div className="pastel2">
            <Pastel2 />
          </div>
        </div>
        <div className="unionbarra">
          <div className="pastel1">
            <Pastel3 />
          </div>
          <div className="pastel2">
            <Pastel4 />
          </div>
        </div>
      </div>
    </div>
  );
}
