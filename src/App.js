import WhatsAppComponent from './components/WhatsAppComponent';
import { UserChoiceProvider } from './context/UserChoiceContext';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/App.css';

function App() {
  return (
    <Router>
      <UserChoiceProvider>
      <div className="App">
        <header className="app-header">
          <img src='./shop_logo.png' alt="Space Cat Logo" className="logo" />

          <h1 className="shop-name">Space Cat</h1>
          <h4 className="shop-location">Seu delivery em Guaratuba de sanduíche natural e doces</h4>
          <h5 className="shop-discount">Peça no WhatsApp com desconto!</h5>

          <div className="shop-social-links">
            <button onClick={() => window.open('https://wa.me/c/554188258888', '_blank')}>Cardápio</button>
            <button onClick={() => window.open('https://www.ifood.com.br/delivery/guaratuba-pr/space-cat-cafe-cohapar/7e70e9da-dd66-424f-9cc3-a490d3705526?utm_medium=share', '_blank')}>Ifood</button>
            <button onClick={() => window.open('https://www.instagram.com/spacecat.cafe/', '_blank')}>Instagram</button>
          </div>
        </header>

        <footer className="app-footer">
          <p>&copy; 2024 Space Cat. Todos os direitos reservados!</p>
        </footer>
      </div>
      <WhatsAppComponent />
      </UserChoiceProvider>
    </Router>
  );
}

export default App;
