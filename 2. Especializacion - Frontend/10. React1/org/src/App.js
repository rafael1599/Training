import './App.css';
import Formulario from './componentes/formulario';
import Header from './componentes/header';
import MiOrg from './componentes/miOrg';



function App() {
  return (
    <div className='app'>
      <Header/>
      <Formulario/>
      <MiOrg/>
    </div>
  );
}

export default App;
