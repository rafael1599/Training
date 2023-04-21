class cliente{
nombre;
dni;
}

class cuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor(){
        this.saldo = 0;
        this.numero = '';
        this.agencia = '';
        
    }

    depositoEnCuenta(valor){
        this.saldo += valor;
    }
    retiroDeCuenta(valor){
        if(valor <= this.saldo){
            this.saldo = this.saldo - valor;
        }else{
            print('No existen fondos suficientes, usted solo puede retirar como maximo: '+this.saldo)
        }
        
    }
}

const cliente1 = new cliente();
cliente1.nombre = "Rafael";
cliente1.dni = 987655468;

const cuentaCorriente1 = new cuentaCorriente();
cuentaCorriente1.numero = 6548442135845;
cuentaCorriente1.saldo = 1000;
cuentaCorriente1.agencia = "1";

const cliente2 = new cliente();
cliente2.nombre = "Leonardo";
cliente2.dni = 987655468;

const cuentaCorriente2 = new cuentaCorriente();
cuentaCorriente2.numero = 6548432185845;
cuentaCorriente2.saldo = 2000;
cuentaCorriente2.agencia = "2"

const cliente3 = new cliente();
cliente3.nombre = "Carlos";
cliente3.dni = 987655468;

const cuentaCorriente3 = new cuentaCorriente();
cuentaCorriente3.numero = 6548432135896;
cuentaCorriente3.saldo = 3000;
cuentaCorriente3.agencia = "3"

const cliente4 = new cliente();
cliente4.nombre = "Daniel";
cliente4.dni = 987655468;

const cuentaCorriente4 = new cuentaCorriente();
cuentaCorriente4.numero = 6548432135339;
cuentaCorriente4.saldo = 4000;
cuentaCorriente4.agencia = "4"

const cliente5 = new cliente();
cliente5.nombre = "Erick";
cliente5.dni = 987655468;

const cuentaCorriente5 = new cuentaCorriente();
cuentaCorriente5.numero = 6548432135456;
cuentaCorriente5.saldo = 5000;
cuentaCorriente5.agencia = "5"

cuentaCorriente1.depositoEnCuenta(2);
print(cliente1);
print(cuentaCorriente1.saldo);
cuentaCorriente1.retiroDeCuenta(1003);
print(cliente1);
print(cuentaCorriente1.saldo);

function print(mensaje){
    console.log(mensaje);
}