import {Cliente} from "./Cliente.js";
export class cuentaCorriente{
    #cliente;
    numero;
    #saldo;
    agencia;

    set setCliente(value){
        if (value instanceof Cliente)
        this.cliente = value;
    }

    get getCliente(){
        return this.#cliente;
    }

    constructor(){
        this.cliente = null;
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

    transferirParaCuenta(valor, cuentaDestino){
        this.retiroDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}