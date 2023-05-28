import "./miOrg.css"


const MiOrg = (props) => {
    // console.log(props)
    // const [mostrar, actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.svg" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg