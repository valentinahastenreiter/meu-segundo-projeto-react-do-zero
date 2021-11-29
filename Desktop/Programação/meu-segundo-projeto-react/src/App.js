import './App.css';
import Dados from './components/Dados';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <Titulo>Meu segundo Projeto React do Zero</Titulo>
      <Dados />
      </section>
      </header>
    </div>
  );
}

export default App;
