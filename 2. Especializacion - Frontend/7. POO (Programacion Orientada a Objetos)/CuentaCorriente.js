export class cuentaCorriente{
    numero;
    saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
        
    }

    depositoEnCuenta(valor){
        this.#saldo += valor;
    }
    retiroDeCuenta(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
        }else{
            print('No existen fondos suficientes, usted solo puede retirar como maximo: '+this.saldo)
        }        
    }
    verSaldo(){
        return this.#saldo;
    }
}