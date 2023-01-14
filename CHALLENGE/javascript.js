
let input = document.querySelector("input");

const txt = document.getElementsByClassName("input__txtArea");
const btn = document.querySelector("btn__Enc");
const out = document.getElementsByClassName("res__output")



let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

function verificar(){
   out.innerHTML = txt.value;
}

btn.addEventListener('clik', verificar);
