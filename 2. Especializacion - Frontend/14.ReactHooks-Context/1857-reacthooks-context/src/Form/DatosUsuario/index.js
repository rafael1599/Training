import React,{useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { ValidarEmail, validarPassword } from "./validaciones";

const componenteFuncion = () => {
  return <>Contenido</>
}

const DatosUsuario = () => {
  const [email, setEmail] = useState({value: "Rafa", valid: true})
  const [password, setPassword] = useState({value: "", valid: true})
  // this.state = {
  //   email: {
  //     value: '',
  //     valid: true
  //   },
  //   password: {
  //     value: '',
  //     valid: true
  //   }
  // }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={false}
        helperText={false && "Ingresa un correo electrónico válido"}
        value={email.value}
        onChange={(input) =>{
          const email = input.target.value;
          const valido = ValidarEmail(email);
          setEmail({ value: email, valid: valido});
          }
        }/>
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        onChange={(input) =>{
          const password = input.target.value;
          setEmail({ value: password, valid: validarPassword(password)});
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
