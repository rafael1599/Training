export class Empleado{
    #nombre;
    #dni;
    #salario;
    #clave;

    constructor(nombre, dni, salario){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }
}