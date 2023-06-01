import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "/footer.png"}}>
        <div className="redes">
            <a href="http://www.github.com/rafael1599">
                <img src="/img/github.svg" alt="GitHub"/>
            </a>
            <a href="https://www.instagram.com/rafo1599/">
                <img src="/img/instagram.svg" alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/in/rafael1599/">
                <img src="/img/linkedin.svg"/>
            </a> 
        </div>
        <img src="/img/logo.svg" alt="org"/>
        <strong>Desarrollado por Rafael</strong>
    </footer>
}
export default Footer