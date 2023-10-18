import React from "react";
import { Link } from "react-router-dom";
import PliesClean from "../imagenes/PliesClean.png";

function Menu() {
  return (
<div className="header">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={PliesClean} alt="Logo" className="Logo" style={{width:'60px', height:'50px', border:'1px solid #000000'}}/></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="Registro">Registro</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-disabled="true" to="/Login">Inicio de sesion</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Trabajadores">Trabajadores</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      <div className="container">
         <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
      </div>
      <div className="p-3">
        <div className="card">
          <div className="card-header" style={{backgroundColor:'#2bab2f'}}>
            BIENVENIDO
          </div>
          <div className="card-body" style={{backgroundColor:'#2bab2f'}}>
            <h5 className="encabezado">Plies Clean</h5>
            <p className="card-text"><strong>100%</strong> de la limpieza de tu hogar en buenas manos</p>
          </div>
        </div>
      </div>
        
    </div>
  
  );
};

export default Menu;