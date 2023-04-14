export function valida(input){
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container --invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    }else{
        input.parentElement.classList.add("input-container --invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError;

    }

}

const mensajesDeError = {
    nombre: {
        valueMissing: "Este campo no puede estar vacio"

    },
    email:{
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12, debe contener una letra mayuscula, una minuscula, un numero y sin caracteres especiales."
    },
    nacimiento:{
        valueMissing: "Este campo no puede estar vacio",
        customError: "Debes tener al menos 18 years de edad"
    },
    numero:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debes ingresar un numero telefonico valido"
    },
    direccion:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 y 40 caracteres"
    },
    ciudad:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La ciudad debe contener entre 4 y 40 caracteres"
    },
    departamento:{
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Ell estado debe contener entre 5 y 40 caracteres"
    },

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const validadores = {
    nacimiento: input => validarNacimiento(input)
}

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            print(error);
            print(input.validity[error]);
            print(mensajesDeError[tipoDeInput][error]);
        }
    })
}

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