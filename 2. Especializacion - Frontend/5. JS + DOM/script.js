const btn = document.querySelector('[data-form-btn]');

const createTask = (evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    print(input.value);
}

btn.addEventListener("click", createTask);



























function print(mensaje){
    console.log(mensaje);
}