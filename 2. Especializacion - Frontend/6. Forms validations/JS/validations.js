const inputNacimiento = document.querySelector("#birth");

inputNacimiento.addEventListener("blur", (evento) => {
    validarNacimiento(evento.target);
});

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if(mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener por lo menos 18 years de edad";
    };

    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(),
        fecha.getUTCDate()
    );

    return diferenciaFechas <= fechaActual;
}



























































function print(mensaje){
    console.log(mensaje)
}