//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/styles.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";
import {
  TablaProyecto1,
  TablaProyecto2,
  TablaProyecto3,
  TablaProyecto4,
  SeccionTabla1,
  NotiTabla1
} from "/src/view/section/tabla_proyecto";
import {
  BuscadorPro,
  Buttonpro1,
  Buttonpro2
} from "/src/view/section/buscador_botones_ps.jsx";

export function DashProyecto() {
  return <AreaP />;
}
//Generacion y Estructura del Dash
function AreaP() {
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
              <Areatrabajo2 />
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
function Areatrabajo2() {
  return (
    <div>
      <br />
      <div className="tablero">
        <div className="scroll-tablas">
          <div className="unionbuscador">
            <BuscadorPro />
            {/*   <Buttonpro1 />
         <Buttonpro2 />  */}
          </div>
          <br />
          <div>
            <TablaProyecto1 />
            <br />
            <div>
              <TablaProyecto2 />
              <br />
              <div>
                <TablaProyecto3 />
                <br />
                <div>
                  <TablaProyecto4 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seccion">
          <SeccionTabla1 />
          <div className="notificacion-tabla">
            <NotiTabla1 />
          </div>
        </div>
      </div>
    </div>
  );
}
