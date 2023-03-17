const paisesDisponibles = ["Peru","Mexico","Colombia", "Brazil"];

function print(variable){
    console.log(variable);
}
print(paisesDisponibles);
paisesDisponibles.splice(1,1,"Chile");
print(paisesDisponibles);

