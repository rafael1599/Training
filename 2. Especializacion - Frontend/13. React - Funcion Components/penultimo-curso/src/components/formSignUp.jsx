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

function FormSingUp() {
    return (
        <Box
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
                        label="First Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
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

            />

            <FormGroup>
                <FormControlLabel
                    required
                    control={
                        <Switch
                            defaultChecked />
                    }
                    label="promociones"
                />
                <FormControlLabel
                    required
                    control={
                        <Switch
                            defaultChecked />
                    }
                    label="Novedades"
                />
            </FormGroup>


            <Stack direction="row" spacing={2}
                margin="normal">
                <Button

                    variant="contained"
                    endIcon={<SendIcon />}
                >Enviar</Button>
            </Stack>

        </Box>
    )
}

export default FormSingUp