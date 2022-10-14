//Si funciona no lo muevan//
import { Buscador } from "/src/view/section/buscador.jsx";
import { Menus } from "/src/view/section/menu.jsx";
import {
  AccountProfile,
  AccountMessage,
  AccountNotification
} from "/src/view/section/noti_men_config.jsx";

export function DashPerfil() {
  return <Perfil />;
}

function Perfil() {
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
//Foto
function Fotoperfil() {
  return <img className=" perfil" src="perfil.png " alt="Perfil" />;
}
//Seccion de Area de Trabajo Titulo Y Texto
function Areatrabajo() {
  return (
    <div className="telephon_-number">
      <div className="heading-5 poppins-medium-vulcan-23px">
        <span className=" poppins-medium-vulcan-23px">Heading 5</span>
      </div>
      <p className="lorem-ipsum-dolor-si poppins-medium-outer-space-16px">
        <span className="poppins-medium-outer-space-16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales netus
          venenatis arcu erat urna, urna, justo, quis pharetra. Suscipit morbi
          sed dignissim urna, duis fames varius imperdiet
        </span>
      </p>

      <div className="telephon_-number">
        <div className="heading-6 poppins-medium-vulcan-23px">
          <span className=" poppins-medium-vulcan-23px">Heading 6</span>
        </div>
        <p className="lorem-ipsum-dolor-si poppins-medium-outer-space-16px">
          <span className="poppins-medium-outer-space-16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            netus venenatis arcu erat urna, urna, justo, quis pharetra. Suscipit
            morbi sed dignissim urna, duis fames varius imperdiet
          </span>
        </p>

        <div className="telephon_-number">
          <div className="heading-7 poppins-medium-vulcan-23px">
            <span className=" poppins-medium-vulcan-23px">Heading 7</span>
          </div>
          <p className="lorem-ipsum-dolor-si poppins-medium-outer-space-16px">
            <span className="poppins-medium-outer-space-16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              netus venenatis arcu erat urna, urna, justo, quis pharetra.
              Suscipit morbi sed dignissim urna, duis fames varius imperdiet
            </span>
          </p>
          <div className="telephon_-number">
            <div className="heading-8 poppins-medium-vulcan-23px">
              <span className=" poppins-medium-vulcan-23px">Heading 8</span>
            </div>
            <p className="lorem-ipsum-dolor-si poppins-medium-outer-space-16px">
              <span className="poppins-medium-outer-space-16px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
                netus venenatis arcu erat urna, urna, justo, quis pharetra.
                Suscipit morbi sed dignissim urna, duis fames varius imperdiet
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
