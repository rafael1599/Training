import React from "react";
import { TextField, Button, Box } from "@mui/material";

class DatosUsuario extends React.Component {
  render() {
    return <>Contenido</>
  }
}

const componenteFuncion = () =>{
  return <>Contenido</>
}

const DatosUsuario = () => {
  constructor(props);
  this.state = {
    email: {
      value: '',
      valid: true
    },
    password: {
      value: '',
      valid: true
    }
  }
}


render() {
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
        value={this.state.email.value}
        onChange={(input) => this.setState({ email: { value: input.target.value } })}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={this.state.password.value}
        onChange={(input) => this.setState({ password: { value: input.target.value } })}

      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
}


export default DatosUsuario;
