import React from "react"
import TheTyler from "../imagenes/TheTyler.jpg"
import Cj from  "../imagenes/Cj.png"
import Escobar from "../imagenes/Escobar.png"
import Negro_cirilo from "../imagenes/Negro_cirilo.png"
import { MdCleaningServices } from "react-icons/md";



function TrabajadoresInit() {

  return(
    
    <div className="container">
      <h1 className="text-center">Top mejores trabajadores</h1>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src={TheTyler}
              className="card-img-top"
              alt="Course 1"
            />
            
            <p><big><MdCleaningServices/> The Tyler</big></p>
            
            <div className="card-body">
              <h5 className="card-title">10/10</h5>
              <p className="card-text">
                Es un negro que limpia como los dioses, este deberia nunca descansar  limpiar mi casa por siempre
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src= {Cj}
              className="card-img-top"
              alt="Course 2"
            />

            <p><big><MdCleaningServices/>Cj chimba</big></p>
            
            <div className="card-body">
              <h5 className="card-title">10/10</h5>
              <p className="card-text">Si pudiera ponerle mas puntuacion lo haria, que negro para limpiar bien ome</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={Escobar}
              className="card-img-top"
              alt="Course 3"
            />
            <p><big><MdCleaningServices/>Escobar</big></p>
            <div className="card-body">
              <h5 className="card-title">9/10</h5>
              <p className="card-text">
                este pendejo no dura ni 5 minutos en tener limpia la casa
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src={Negro_cirilo}
              className="card-img-top"
              alt="Course 4"
            />
            <p><big><MdCleaningServices/>Negro Cirilo</big></p>
            <div className="card-body">
              <h5 className="card-title">8/10</h5>
              <p className="card-text">
                Limpia muy bien mi hogar sabe mucho sobre la limpieza
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default TrabajadoresInit;