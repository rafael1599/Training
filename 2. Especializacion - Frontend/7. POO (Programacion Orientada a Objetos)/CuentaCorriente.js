import {Cliente} from "./Cliente.js";
export class cuentaCorriente{
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0;

    set setCliente(value){
        if (value instanceof Cliente)
        this.cliente = value;
    }

    get getCliente(){
        return this.#cliente;
    }

    constructor(cliente, numero, agencia){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantidadCuentas++;
        
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