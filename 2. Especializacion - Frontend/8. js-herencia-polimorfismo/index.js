/*Importación de clases*/
import {Empleado} from './Empleado';
import {Gerente} from './Gerente';
import {Director} from './Director'; 



import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './Cuentas/CuentaAhorro.js';


const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const CuentaCorrienteLeonardo = new CuentaCorriente(cliente, '1', '001');
const CuentaAhorroLeonardo = new CuentaAhorro('Leonardo', 01, '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

let saldo = CuentaCorrienteLeonardo.verSaldo(); 

saldo = CuentaCorrienteLeonardo.depositoEnCuenta(150);
CuentaCorrienteLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = CuentaCorrienteLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas);

console.log(CuentaCorriente.cantidadCuentas);




