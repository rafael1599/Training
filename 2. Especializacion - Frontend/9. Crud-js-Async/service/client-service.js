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

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  })
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
};



