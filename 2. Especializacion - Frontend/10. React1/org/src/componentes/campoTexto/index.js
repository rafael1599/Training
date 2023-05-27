import "./CampoTexto.css"

const CampoTexto = (props)=>{
    const placeholderMod = `Ingresar ${props.titulo}`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input placeholder={placeholderMod} required = {props.required}/>
    </div>

}
export default CampoTexto
