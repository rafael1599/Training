

clientServices
    .listaClientes()
    .then((data) => {
        data.forEach(perfil) => {
            const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
            table.appendChild(nuevaLinea);
        });
    })
.catch((error) =>alert("Ocurrio un error"));