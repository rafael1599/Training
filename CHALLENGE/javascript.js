
// Obtener el botón utilizando su clase
let boton = document.querySelector('.btn__enc');

let input = document.querySelector(".input__txtArea");

let out = document.getElementsByClassName(".res__output");

// Agregar un evento click al botón
boton.addEventListener('click', function () {
   // Obtener el valor del campo de entrada
   const valor = input.value;
   let a = "ai";
   let e = "enter";
   let i = "imes";
   let o = "ober";
   let u = "ufat";

   // desaparecer 
   // Mostrar el valor
   out.innerHTML = input.value;

   console.log(valor);
});