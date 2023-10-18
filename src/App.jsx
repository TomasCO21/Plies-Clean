import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import Trabajadores from './paginas/Trabajadores';
import TrabajadoresL from './paginas/trabajadoresL';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import HomeL from './paginas/homeL';
import Perfil from './paginas/perfil';
import Miscursos from './paginas/Miscursos';
import Cursilloanti from './paginas/Cursilloanti'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Trabajadores' element={<Trabajadores/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Registro' element={<Registro/>}/>
        <Route exact path='/HomeL' element={<HomeL/>}/>
        <Route exact path='/Perfil' element={<Perfil/>}/>
        <Route exact path='/Miscursos' element={<Miscursos/>}/>
        <Route exact path='/TrabajadoresL' element={<TrabajadoresL/>}/>
        <Route exact path='/Cursilloanti'element={<Cursilloanti/>}/>


        
      </Routes>
    </Router>
  );
}
export default App;
  