import React from "react";
import { Link } from "react-router-dom";
import PliesClean from "../imagenes/PliesClean.png";

function MenuL() {
  return (
<div className="header">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={PliesClean} alt="Logo" className="Logo" style={{width:'60px', height:'50px', border:'1px solid #000000'}}/>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/homeL">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/Perfil">Perfil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/TrabajadoresL">Trabajadores</Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link active" to="/Miscursos">Mis cursos</Link>
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
    </div>
  );
}

export default MenuL;