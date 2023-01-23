let encrButton = document.querySelector('.btn__enc');
encrButton.addEventListener("click", checkInputAndShowValue);

let notFoundMessage = document.getElementsByClassName("res__notFound")[0];
let out = document.getElementsByClassName("res__found")[0];
let inputText = document.querySelector(".input__txtArea");
let phrase = "Mensaje no encontrado";

function checkInputAndShowValue() {
   if (inputText.value.trim() === "") {
       alert("El campo de texto está vacío, ingrese un valor antes de continuar");
       return;
   }
   showEncrMessage();
}

function showEncrMessage() {
   notFoundMessage.classList.add("hide");
   phrase = inputText.value;
   console.log(phrase);
   out.textContent = phrase;
}