import { clientServices } from "../service/client-service";

const formulario = document.querySelector("[data-form]");

obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
}

if(id == null){
    window.location.href = "../screens/error.html";
}


const nombre = document.querySelector("[data-nombre]");
const email = document.querySelector("[data-email]");

const id = url.searchParams("id");
clientServices.detalleCliente(id).then((perfil) => {
    nombre.value = perfil.nombre;
    email.value = perfil.email;
});

obtenerInformacion();

formulario.addEventListener("summit", (evento) => {
    evento.preventDefault()
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
}