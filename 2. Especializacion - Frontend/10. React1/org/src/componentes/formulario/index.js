import "./Formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const manejarEnvio = (e) =>{
    e.preventDefault()
    console.log("Manejar envio", e)
}

const Formulario = () => {
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador.
            </h2>
            <CampoTexto titulo="Nombre" required/>
            <CampoTexto titulo="Puesto"/>
            <CampoTexto titulo="Foto" required/>
            <ListaOpciones required/>
            <Boton texto = "Crear colaborador"/>

        </form>
    </section>
}

export default Formulario