import React from "react";
import { Link } from "react-router-dom";
import PliesClean from "../imagenes/PliesClean.png";

function Init() {
    return (
    <div className='container'>
      
      <div className="row">
        
        <img src={PliesClean} alt="diseño"className="mx-auto" style={{maxWidth:"500px"}}/>

        <div className="container">
          <div className="mx-auto">
            <div className="card">
  <div className="card-header">
    Comienza tu inicio de sesion
  </div>
  <div className="card-body">

    <form action="/HomeL" method="get">
      <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Ingresa tu correo electronico</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">No compartir el correo con nadie mas</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Ingresa tu contraseña</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Acepta terminos y condiciones</label>
  </div>
  <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  </div>
</div>
          </div>
        </div>
          
      </div>
    </div>    
  );
}

export default Init;
        