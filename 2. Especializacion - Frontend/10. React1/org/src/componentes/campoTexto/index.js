import "./CampoTexto.css"

const CampoTexto = (props)=>{
    const placeholderMod = `Ingresar ${props.titulo}`

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }


    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input className="campo-texto-color" 
            placeholder={placeholderMod} 
            required = {props.required} 
            value={props.valor}
            onChange={manejarCambio}/>
    </div>

}
export default CampoTexto
