const listaClientes = () => 
fetch("GET", "http://localhost:3000/perfil").then((respuesta)=> respuesta.json());

export const clientServices= {
    listaClientes,
};