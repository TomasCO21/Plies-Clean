import React from "react";
import Menu from "../componentes/Menu";
import Singin from "../componentes/singin";
import FormularioRegistro from "../componentes/FormularioRegistro"; 
  
function Registro(){
  return (
    <div className="Registro">
      <Menu/>
      <FormularioRegistro/>
    </div>
  );
}

export default Registro;