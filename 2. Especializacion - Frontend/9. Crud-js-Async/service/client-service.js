const listaClientes = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const crearCliente = (nombre, email) => {
  fetch("http://localhost:3000/perfil", {
    method: "POST",
    Headers: {
      "Content-Type": "aplication/json"
    }, 
    body: JSON.stringify({nombre, email})
  })
};

export const clientServices = {
  listaClientes,
  crearCliente,
};



