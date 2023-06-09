import * as React from 'react';
import Button from "@mui/material/Button"
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';



function FormSingUp({ handleSubmit }) {
    const [name, setName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [prom, setProm] = React.useState(true)
    const [nov, setNov] = React.useState(true)

    const [errors, setErrors] = React.useState({
        nombre: {
            error: false,
            message:
                "El nombre debe contener por lo menos 3 caracteres"
        },
        apellido: {
            error: false,
            message:
                "El apellido debe contener por lo menos 4 caracteres"
        }

    })
    

    // function validarNombre(nombre) {
    //     if(nombre.length >= 3){
    //         return {
    //             nombre:{
    //                 error: false, 
    //                 message:''
    //             }
    //         }
    //     }else{
    //         return{
    //             nombre:{
    //                 error: true,
    //                 message:
    //                     "Deben ser al menos 3 caracteres"
    //             }
    //         }
    //     }
    // }

    function validarApellido(apellido) {
        if(apellido.length >= 3){
            return {
                apellido:{
                    error: false, 
                    message:''
                }
            }
        }else{
            return{
                apellido:{
                    error: true,
                    message:
                        "Deben ser al menos 3 caracteres"
                }
            }
        }
    }

    return (
        <Box
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit({
                    name,
                    lastName,
                    email,
                    prom,
                    nov
                })
            }}
            component="form"
            noValidate
            // onSubmit={handleSubmit} 
            sx={{ mt: 3 }}
            autoComplete="off"
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Nombre"
                        autoFocus
                        onChange={(e) => {
                            console.log(e.target.value)
                            setName(e.target.value)
                        }}
                        value={name}
                        // error={errors.nombre.error}
                        // helperText={
                        //     errors.nombre.error ? errors.nombre.message : ""
                        // }

                        // onBlur={(e) => {
                        //     setErrors(
                        //         validarNombre(e.target.value)
                        //     )
                        // }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setLastName(e.target.value)
                        }}

                        error={errors.apellido.error}
                        helperText={
                            errors.apellido.error ? errors.apellido.message : ""
                        }
                        onBlur={(e) =>{
                            setErrors(
                                validarApellido(e.target.value)
                            )   
                        }}
                    />
                </Grid>
            </Grid>
            <TextField
                type="mail"
                id="Email"
                label="Correo electronico"
                variant="outlined"
                fullWidth
                margin='normal'
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}

            />

            <FormGroup>
                <FormControlLabel
                    required
                    control={
                        <Switch
                            defaultChecked
                            onChange={(e) => setProm(e.target.checked)}
                        />
                    }
                    label="promociones"
                />
                <FormControlLabel
                    required
                    control={
                        <Switch
                            defaultChecked
                            onChange={(e) => setNov(e.target.checked)}
                        />
                    }
                    label="Novedades"
                />
            </FormGroup>


            <Stack direction="row" spacing={2}
                margin="normal">
                <Button

                    type='submit'
                    variant="contained"
                    endIcon={<SendIcon />}
                >Enviar</Button>
            </Stack>

        </Box>
    )
}

export default FormSingUp