export class SistemaAutenticacion{
    login(empleado, clave){
        if ("autenticable" in usuario && usuario.autenticable instanceof function)
            return usuario.autenticable(clave);     
        else
            return false;
    }
}