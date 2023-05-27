import "./ListaOpciones.css"

const equipos = [
    "Programacion",
    "FrontEnd",
    "FrontEnd",
    "Data Science",
    "UX Disenio",
    "Movil",
    "Innovacion y Gestion"
]

const ListaOpciones = (props) =>{
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
        <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
        {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}    
        </select>
    </div>
}
export default ListaOpciones