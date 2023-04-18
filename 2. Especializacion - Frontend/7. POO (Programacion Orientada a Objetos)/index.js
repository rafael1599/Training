class cliente{
nombre;
dni;
numeroCuenta;
saldoCuenta;
}

const cliente1 = new cliente();
cliente1.nombre = "Rafael";
cliente1.dni = 987655468;
cliente1.numeroCuenta = 6548442135845;
cliente1.saldoCuenta = 1000;

const cliente2 = new cliente();
cliente2.nombre = "Leonardo";
cliente2.dni = 987655468;
cliente2.numeroCuenta = 6548432185845;
cliente2.saldoCuenta = 2000;

const cliente3 = new cliente();
cliente3.nombre = "Carlos";
cliente3.dni = 987655468;
cliente3.numeroCuenta = 6548432135896;
cliente3.saldoCuenta = 3000;

const cliente4 = new cliente();
cliente4.nombre = "Daniel";
cliente4.dni = 987655468;
cliente4.numeroCuenta = 6548432135339;
cliente4.saldoCuenta = 4000;

const cliente5 = new cliente();
cliente5.nombre = "Erick";
cliente5.dni = 987655468;
cliente5.numeroCuenta = 6548432135456;
cliente5.saldoCuenta = 5000;

print(cliente2.saldoCuenta);

function print(mensaje){
    console.log(mensaje);
}