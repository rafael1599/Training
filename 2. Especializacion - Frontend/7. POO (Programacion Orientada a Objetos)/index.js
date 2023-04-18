class cliente{
nombre;
dni;
numeroCuenta;
saldoCuenta;
}

const cliente1 = new cliente();
cliente1.nombre = "Rafael";
cliente1.dni = 987655468;
cliente1.numeroCuenta = 6548432135845;
cliente1.saldoCuenta = 5000;

print(cliente1);

function print(mensaje){
    console.log(mensaje);
}