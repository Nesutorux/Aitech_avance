//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/styles.css";
import { TablaInicial } from "/src/view/section/tabla_inicio.jsx";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";

export function DashInicio() {
  return <Inicio />;
}
//Generacion y Estructura del Dash
function Inicio() {
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
              <Areatrabajo />
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
function Areatrabajo() {
  return (
    <div className="tabla">
      <TablaInicial />
    </div>
  );
}
