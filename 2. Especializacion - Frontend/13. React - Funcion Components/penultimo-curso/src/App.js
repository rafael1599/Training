import Container from "@mui/material/Container"
import './App.css';
import FormSingUp from './components/formSignUp';

function App() {
  return (
    <Container component="section" maxWidth= "sm">
      <h1>Formulario de registro</h1>
      <FormSingUp/>
    </Container>
  );
}

export default App;
