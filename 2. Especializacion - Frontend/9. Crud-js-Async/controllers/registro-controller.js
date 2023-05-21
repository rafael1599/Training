import { clientServices } from "../service/client-service";
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("sunmit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre+" - "+email);
    clientServices
    .crearCliente(nombre, email)
    .then(() => {
        window.location.href = "/screens/registro_completado.html"
    }).catch(err => console.log(err));
})