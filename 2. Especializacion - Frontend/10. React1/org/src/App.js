import { useState } from 'react';
import './App.css';
import Formulario from './componentes/formulario';
import Header from './componentes/header';
import MiOrg from './componentes/miOrg';



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true) 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div className='app'>
      <Header/>
      {mostrarFormulario === true ? <Formulario/> : <></>}
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
    </div>
  );
}

export default App;
