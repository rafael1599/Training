export class SistemaAutenticacion{
    login(empleado, clave){
        return usuario.autenticable(clave);
        return empleado.clave == clave;
    }
}