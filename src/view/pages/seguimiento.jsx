//Si funciona no lo muevan//
import React from "react";
import "/src/view/css/tablas_pro_seg.css";
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  TablaSeguimiento1,
  TablaSeguimiento2,
  TablaSeguimiento3
} from "/src/view/section/tabla_seguimiento.jsx";
import {
  SeccionTabla2,
  NotiTabla2
} from "/src/view/section/tabla_seguimiento.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";
import {
  BuscadorSeg,
  Buttonseg1,
  Buttonseg2
} from "/src/view/section/buscador_botones_ps.jsx";

export function DashSeguimiento() {
  return <StatusCl />;
}
//Generacion y Estructura del Dash
function StatusCl() {
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
              <AreaS />
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

function AreaS() {
  return (
    <div>
      <br />
      <div className="tablero">
        <div className="scroll-tablas">
          <div className="unionbuscador">
            <BuscadorSeg />
            {/*   <Buttonseg1 /> 
         <Buttonseg2 />  */}
          </div>
          <br />
          <div>
            <TablaSeguimiento1 />
            <br />
            <div>
              <TablaSeguimiento2 />
              <br />
              <div>
                <TablaSeguimiento3 />
              </div>
            </div>
          </div>
        </div>
        <div className="seccion2">
          <SeccionTabla2 />
          <div className="notificacion-tabla2">
            <NotiTabla2 />
          </div>
        </div>
      </div>
    </div>
  );
}
