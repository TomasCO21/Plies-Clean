import React from "react";
import { Link } from "react-router-dom";
import PliesClean from "../imagenes/PliesClean.png";

function Portada() {
  return (
    <div className='container'>
      
      <div className="row">
        <img src={PliesClean} alt="diseño"className="mx-auto" style={{maxWidth:"400px"}}/>
        <p className="text-center">Empieza ya con la limpieza de tu hogar</p>
      </div>

      <Link to="/Login">
        <div className="d-grid gap-2 mx-auto pb-1">
          <button className="btn btn-primary" type="button">Iniciar sesion</button>
        </div>
      </Link>

      <Link to="/Login">
        <div className="d-grid gap-2 mx-auto pb-1">
          <button className="btn btn-primary" type="button">Registrarse</button>
        </div>
      </Link>
    </div>       
  );
}

export default Portada;
