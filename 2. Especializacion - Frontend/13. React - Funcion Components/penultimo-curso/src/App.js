import './App.css';
import FormSingUp from './components/formSignUp';
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';


function App() {
  return (
    <Container component="section" maxWidth= "sm">
      <Typography variant='h3' component="h1">Formulario de registro</Typography>
      <FormSingUp/>
    </Container>
  );
}

export default App;
