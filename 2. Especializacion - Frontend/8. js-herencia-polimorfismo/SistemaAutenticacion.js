export class SistemaAutenticacion{
    static login(empleado, clave){
        if ("autenticable" in usuario 
        && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);     
        else
            return false;
    }
}