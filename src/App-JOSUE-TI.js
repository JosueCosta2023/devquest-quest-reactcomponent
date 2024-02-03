import logo from './logo.svg';
import './App.css';
import Texto from './components/texts/index'
import Button from './components/buttons/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Texto contentText="Whats your Name?" colorText="orange" />
        </a>

        <Button label="Baixe o CV"/>

      </header>
    </div>
  );
}

export default App;
