import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"



const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto
                titulo="Nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            
            <CampoTexto
                titulo="Puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            
            <CampoTexto
                titulo="Foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto} 
            />
            
            <ListaOpciones
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos={props.equipos}
                required 
            />
            <Boton
                texto="Crear colaborador" />

        </form>
    </section>
}

export default Formulario