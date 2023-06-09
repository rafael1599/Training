import * as React from 'react';
import Button from "@mui/material/Button"
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function FormSingUp() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <form>
                <TextField type="text" id="standard-basic" label="Nombre" variant="standard" />
                <TextField type="text" id="standard-basic" label="Apellidos" variant="standard" />
                <TextField type="mail" id="standard-basic" label="Correo electronico" variant="standard" />
                <label>Promociones</label>
                <input type="checkbox" />
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                    >Enviar</Button>
                </Stack>
            </form>
        </Box>
    )
}

export default FormSingUp