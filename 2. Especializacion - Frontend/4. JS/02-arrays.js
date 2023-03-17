const paisesDisponibles = ["Peru","Mexico","Colombia", "Brazil"];

function print(mensaje){
    console.log(mensaje);
}
print(paisesDisponibles);
paisesDisponibles.splice(1,1,"Chile");
print(paisesDisponibles);

