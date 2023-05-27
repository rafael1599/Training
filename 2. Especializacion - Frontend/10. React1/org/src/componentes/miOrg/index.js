import "./miOrg.css"
import { useState } from "react"


const MiOrg = () => {

    const [nombre, actualizarNombre] = useState("Rafael")

    const manejarClick = () => {
        actualizarNombre("Rafael Lopez")
    }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.svg" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg