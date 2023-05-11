export class SistemaAutenticacion{
    login(empleado, clave){
        return empleado.clave == clave;
    }
}