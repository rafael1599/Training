import "./Equipo.css"
import Colaborador from "../colaborador"

const Equipo = (props) => {
    
    const { colaboradores } = props
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const obj = {
        backgroundColor: colorSecundario
    }
    
    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={obj}>
    <h3 style={estiloTitulo}>{titulo} </h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => 
                    <Colaborador datos = {colaborador} 
                    key = {index} 
                    colorPrimario={colorPrimario}
                />)
            }

        </div>
    </section>

}

export default Equipo