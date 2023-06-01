import "./Equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {
    
    const { colaboradores, eliminarColaborador, actualizarColor } = props
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }
    
    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <section className="equipo" style={obj}>
        <input 
        type="color" 
        className="input-color"
        value={colorPrimario}
        onChange={(e)=>{
            actualizarColor(e.target.value, id)
        }}
        />
    <h3 style={estiloTitulo}>{titulo} </h3>
        <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => 
                    <Colaborador datos = {colaborador} 
                    key = {index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    actualizarColor = {actualizarColor}
                />)
            }

        </div>
    </section>

}

export default Equipo