import {cuentaCorriente} from './CuentaCorriente.js';
import { Cliente } from './Cliente.js';

const cliente1 = new Cliente('Roberto','98999', '1000009');
print(cliente1);

const cliente2 = new Cliente('Maria','98900','1000010');
print(cliente2);

const cuentaCorriente1 = new cuentaCorriente(cliente1, 6548442135845, "1");
const cuentaCorriente2 = new cuentaCorriente(cliente2, 6548432185845, "2");

const saldo1 = cuentaCorriente1.depositoEnCuenta(200);
print("El saldo de "+cliente1.nombre+" era: "+saldo1);

cuentaCorriente1.transferirParaCuenta(199,cuentaCorriente2);
const saldo2 = cuentaCorriente2.depositoEnCuenta(0);
print("El saldo actual de "+cliente1.nombre+" es: "+saldo1);
print("El saldo actual de "+cliente2.nombre+" es: "+saldo2);

print('La cantidad de cuentas creadas es: '+cuentaCorriente.cantidadCuentas);



function print(mensaje){
    console.log(mensaje);
}