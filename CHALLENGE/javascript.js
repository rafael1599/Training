let encrButton = document.querySelector('.btn__enc');
encrButton.addEventListener("click", checkInputAndShowValue);

let notFoundMessage = document.getElementsByClassName("res__notFound")[0];
let out = document.getElementsByClassName("res__found")[0];
let inputText = document.querySelector(".input__txtArea");

function checkInputAndShowValue() {
   if (inputText.value.trim() === "") {
      alert("El campo de texto está vacío, ingrese un valor antes de continuar");
      return;
   }
   
   let inputPhrase = inputText.value;
   encriptAndShowPhrase(inputPhrase);
}

function showEncrMessage() {
   
}

function encriptAndShowPhrase(phrase) {
   notFoundMessage.classList.add("hide");

   let vowels = "aeiou";
   let encriptedPhrase = "";
   for (let i = 0; i < phrase.length; i++) {
      if (vowels.indexOf(phrase[i]) !== -1) {

         if (phrase[i] === 'a') {
            encriptedPhrase += "ai";
         }
         else if(phrase[i] === 'e'){
            encriptedPhrase += "enter";
         }
         else if(phrase[i] === 'i'){
            encriptedPhrase += "imes";
         }
         else if(phrase[i] === 'o'){
            encriptedPhrase += "ober";
         }
         else if(phrase[i] === 'u'){
            encriptedPhrase += "ufat";
         }
         else {
            encriptedPhrase += phrase[i] + " ";
         }
      } else {
         encriptedPhrase += phrase[i];
      }
   }
   console.log(phrase, " / ", encriptedPhrase);
   out.textContent = encriptedPhrase;
}
