let encrButton = document.querySelector('.btn__enc');
encrButton.addEventListener("click", showEncrMessage);

let input = document.querySelector(".input__txtArea");
let out = document.getElementsByClassName(".res__output");

function showEncrMessage() {
   let notFoundMessage = document.getElementsByClassName("ress__notFound")[0];
   notFoundMessage.classList.add("hide");

   let out = document.getElementsByClassName("res__output");
   const valor = input.value;
   out.innerHTML = input.value;

   console.log(valor);
}