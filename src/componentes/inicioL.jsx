import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/estilos.css';
import Cj from "../imagenes/Cj.png"
import {MdCleaningServices} from "react-icons/md";

function InicioL() {
  return (
    <div className="row">
      <div className="container" style = {{ backgroundColor: '#ffff'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Inscripcion para empezar tu trabajo como limpiador</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Clientes | Limpiadores</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Porcentaje de limpieza</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}>
                  75%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>

      {/* codigo actual */}
      <div className="container mx-auto text-center">
        <h2 className="pt-3">Personas nuevas</h2>
      </div>
      
      <div className="container px-5">
        <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              
              <div className="card">
                <img src={Cj} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">CJ</h5>
                  <p className="card-text">Hola soy el negro que limpiara toda tu casa, si me pagas poco te enviare a conocer a Big smoke</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><MdCleaningServices/>120 horas</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>3 modulos</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>100% online</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Conocelas</Link>
                </div>
              </div>
            
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={Cj} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">El loquito del metro</h5>
                  <p className="card-text">Es el limpiador por default del metro</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><MdCleaningServices/>120 horas</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>3 modulos</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>100% online</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Continuar</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={Cj} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">El persigue tombos</h5>
                  <p className="card-text">Policia policia de noche  de dia bolillo venteado subete hp que te voy a llevar a la upj 24 por guevon</p>
                  <div className="row pb-3">
                    <div className="col"><p><small><MdCleaningServices/>120 horas</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>3 modulos</small></p></div>
                    <div className="col"><p><small><MdCleaningServices/>100% online</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Go somewhere</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>        
      </div>
      
    </div>
  );
}

export default InicioL;