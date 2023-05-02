import {cuentaCorriente} from './CuentaCorriente.js';
import { cliente } from './Cliente.js';

const cliente1 = new cliente();
cliente1.dni = '98999'
cliente1.nombre = 'Roberto';
cliente1.ruta = '1000009';

const cliente2 = new cliente();
cliente2.dni = '98900'
cliente2.nombre = 'Maria';
cliente2.ruta = '1000010';

const cuentaCorriente1 = new cuentaCorriente();
let saldo = cuentaCorriente1.verSaldo();
cuentaCorriente1.numero = 6548442135845;
cuentaCorriente1.saldo = 1000;
cuentaCorriente1.agencia = "1";

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = 6548432185845;
cuentaCorriente2.saldo = 2000;
cuentaCorriente2.agencia = "2";
cuentaCorriente2.cliente = cliente2;

// const cliente3 = new cliente();
// cliente3.nombre = "Carlos";
// cliente3.dni = 987655468;

// const cuentaCorriente3 = new cuentaCorriente();
// cuentaCorriente3.numero = 6548432135896;
// cuentaCorriente3.saldo = 3000;
// cuentaCorriente3.agencia = "3"

// const cliente4 = new cliente();
// cliente4.nombre = "Daniel";
// cliente4.dni = 987655468;

// const cuentaCorriente4 = new cuentaCorriente();
// cuentaCorriente4.numero = 6548432135339;
// cuentaCorriente4.saldo = 4000;
// cuentaCorriente4.agencia = "4"

// const cliente5 = new cliente();
// cliente5.nombre = "Erick";
// cliente5.dni = 987655468;

// const cuentaCorriente5 = new cuentaCorriente();
// cuentaCorriente5.numero = 6548432135456;
// cuentaCorriente5.saldo = 5000;
// cuentaCorriente5.agencia = "5"


const saldo1 = cuentaCorriente1.depositoEnCuenta(200);
print("El saldo de "+cliente1.nombre+" era: "+saldo);

cuentaCorriente1.transferirParaCuenta(199,cuentaCorriente2);
const saldo2 = cuentaCorriente2.depositoEnCuenta(0);
print("El saldo actual de "+cliente1.nombre+" es: "+saldo1);
print("El saldo actual de "+cliente2.nombre+" es: "+saldo2);




function print(mensaje){
    console.log(mensaje);
}