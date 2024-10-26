import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">

        <img src='./shop-logo.png' alt="Space Cat Logo" className="logo" />

        <h1 className="shop-name">Space Cat Café</h1>
        <h4 className="shop-location">Seu delivery em Guaratuba de sanduíche natural e doces!</h4>


        <div className="shop-social-links">
          <button onClick={() => window.open('https://www.instagram.com', '_blank')}>Instagram</button>
          <button onClick={() => window.open('https://www.instagram.com', '_blank')}>Instagram</button>
          <button onClick={() => window.open('https://www.instagram.com', '_blank')}>Instagram</button>
        </div>
      </header>
    </div>
  );
}

export default App;
