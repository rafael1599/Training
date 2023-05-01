export class cuentaCorriente{
    numero;
    #saldo;
    agencia;

    constructor(){
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
        
    }

    depositoEnCuenta(valor){
        this.#saldo += valor;
        return this.#saldo;
    }

    retiroDeCuenta(valor){
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }
}