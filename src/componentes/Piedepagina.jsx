import React from 'react';
import PliesClean from "../imagenes/PliesClean.png";
import {Link} from "react-router-dom";
import { PiCopyrightBold } from "react-icons/pi"
  
function Piedepagina() {
  return (
    <div className="container-fluid">
     <div className="row mx-auto">
       <div className="text-center pt-5 mx-auto">      
        <h2 className="encabeza">Mira nuestras novedades</h2>
        <img src={PliesClean} alt="pdp" width="70%"/>
        <h4 className="encabezado">¿Necesitas trabajo?. Empieza a trabajar con nosotros</h4>
        <p className="px-3"><small>Somos grandes amigos del medio ambiente y de la limpieza de sus hogares por esto te necesitamos.</small></p>
        <section>
          <button className="btn btn-succes" style={{backgroundColor:'#0E9FD1', color:'#ffff'}}>Insalar Plies Clean</button>
        </section>
        <div id="copyright">
          <hr/>
          <p><small>PliesClean<PiCopyrightBold/>Todos los derechos reservados.</small></p>
        
        </div>
       </div>
     </div> 
    </div>

  );
  
}

export default Piedepagina;
  
