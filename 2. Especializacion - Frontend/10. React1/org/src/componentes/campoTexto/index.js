import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props)=>{
    const placeholderMod = `Ingresar ${props.titulo}`

    const manejarCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    
    const { type = "text" } = props

    console.log(type)

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderMod} 
            required = {props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>

}
export default CampoTexto
