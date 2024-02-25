import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Encabezado from './Components/Encabezado';
import RecipeCard from './Components/RecipeCard';
import Buscador from './Components/Buscador';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Encabezado
          logo={logo}
          titulo="Mi proyecto"
        />
        <Buscador />
        <br></br>
        <RecipeCard />
      </header>
    </div>
  );
}

export default App;
