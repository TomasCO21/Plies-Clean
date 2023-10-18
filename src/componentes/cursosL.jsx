import React from "react";
import { Link } from 'react-router-dom';

function CursosL() {
  return(
    <div className="row">
      <div className="container" style = {{ backgroundColor: '#ffff'}}>
        <div className='p-3'>
          <h1 className="encabezado text fw-bold" style={{color:'#000000'}}>Cursos de limpieza</h1>
          <div className="card">
            <div className="card-header encabezado" style={{color:'#2c4d80'}}>
              <small>Convertirse en trabajador | Limpiador</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado" style={{color:'#2c4d80'}}>Curso de trapeadora</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "100%"}}>
                  100%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary" style={{backgroundColor:'#49AB14'}}>Fin del curso</Link>
            </div>
          </div>
          <div className="pt-3"></div>
         <div className="card">
            <div className="card-header encabezado" style={{color:'#2c4d80'}}>
              <small>Convertirse en trabajador | Limpiador</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado" style={{color:'#2c4d80'}}>Curso de barredora</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}>
                  75%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary"style={{backgroundColor:'#49AB14'}}>Continuar</Link>
            </div>
          </div>
          <div className="pt-3"></div>
          <div className="card">
            <div className="card-header encabezado" style={{color:'#2c4d80'}}>
              <small>Convertirse en trabajador | Limpiador</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado" style={{color:'#2c4d80'}}>Curso de antisuciedad</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "50%"}}>
                  50%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="/Cursilloanti" className="btn btn-primary"style={{backgroundColor:'#49AB14'}}>Continuar</Link>
            </div>
          </div>
          <div className="pt-3"></div>
          <div className="card">
            <div className="card-header encabezado" style={{color:'#2c4d80'}}>
              <small>Convertirse en trabajador | Limpiador</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado" style={{color:'#2c4d80'}}>Curso de protectores contra bacterias</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "30%"}}>
                  30%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary"style={{backgroundColor:'#49AB14'}}>Continuar</Link>
            </div>
          </div>
          <div className="pt-3"></div>
          <div className="card">
            <div className="card-header encabezado" style={{color:'#2c4d80'}}>
              <small>Convertirse en trabajador | Limpiador</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado" style={{color:'#2c4d80'}}>Curso de reciclaje en los hogares</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "10%"}}>
                  10%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr/>
              <Link to="#" className="btn btn-primary"style={{backgroundColor:'#49AB14'}}>Continuar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CursosL;
