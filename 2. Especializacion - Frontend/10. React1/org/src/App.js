import { useState } from 'react';
import './App.css';
import Formulario from './componentes/formulario';
import Header from './componentes/header';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';



function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "FrontEnd",
      colorPrimario: "#82CFFA",
      colorSecundario: '#E8F8FF'
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: '#F0F8E2'
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: '#FDE7E8'
    },
    {
      titulo: "UX Disenio",
      colorPrimario: "#DB6EBF",
      colorSecundario: '#FAE9F5'
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: '#FFF5D9'
    },
    {
      titulo: "Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: '#FFEEDF'
    }
  ]


  return (
    <div className='app'>
      <Header />
      {mostrarFormulario === true ? <Formulario /> : <></>}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} />)
      }

    </div>
  );
}

export default App;
