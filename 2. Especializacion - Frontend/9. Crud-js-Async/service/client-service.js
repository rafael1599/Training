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

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());

}

const actualizarCliente = (nombre, email,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT";
    Headers: {
      "ContentType": "application/json"
    },
    body: JSON.stringify({nombre, email})
  })
  . then(respuesta => console.log(respuesta))
  .catch((err) => console.log(err))

  

}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};



