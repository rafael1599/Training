// Obtener el campo de entrada utilizando su clase
const campoDeEntrada = document.querySelector('.mi-campo-de-entrada');

// Obtener el botón utilizando su clase
const boton = document.querySelector('.mi-boton');

// Agregar un evento click al botón
boton.addEventListener('click', function() {
  // Obtener el valor del campo de entrada
  const valor = campoDeEntrada.value;
  
  // Mostrar el valor en la consola
  console.log(valor);
});