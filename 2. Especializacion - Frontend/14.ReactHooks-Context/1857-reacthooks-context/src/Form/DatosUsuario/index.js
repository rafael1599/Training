import React,{useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarEmail, validarPassword } from "./validaciones";

// const componenteFuncion = () => {
//   return <>Contenido</>
// }

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({
    value: "", 
    valid: null
  });

  const [password, setPassword] = useState({
    value: "", 
    valid: null
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}

      onSubmit={(e)=>{
        e.preventDefault();
        if(email.valid && password.valid){
          console.log("Siguiente formulario")
          updateStep(1);

        }else{
          console.log("Ingrese sus credenciales correctamente")
        }
        console.log(email, password)
      }

      }
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.valid === false}
        helperText={
          email.valid === false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) =>{
          const email = input.target.value;
          setEmail({ 
            value: email, 
            valid: ValidarEmail(email)});
          }
        }/>

      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"

        error={
          password.valid === false
        }

        helperText={
          password.valid === false && "Ingresa una contraseña válido"
        }

        value={password.value}
        onChange={(input) =>{
          const password = input.target.value;
          setPassword({ 
            value: password, 
            valid: validarPassword(password)});
          }
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}




export default DatosUsuario;
