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
  Barra1,
  Barra2,
  Barra3,
  Barra4
} from "/src/view/section/grafica_barra.jsx";

export function DashGrafica1() {
  return <Barras />;
}
//Generacion y Estructura del Dash
function Barras() {
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
              <AreaGraf1 />
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
function AreaGraf1() {
  return (
    <div>
      <div clasName="scroll-grafica">
        <div className="unionbarra">
          <div className="barra1">
            <Barra1 />
          </div>
          <div className="barra2">
            <Barra2 />
          </div>
        </div>
        <div className="unionbarra">
          <div className="barra1">
            <Barra3 />
          </div>
          <div className="barra2">
            <Barra4 />
          </div>
        </div>
      </div>
    </div>
  );
}
