import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ProdutoUser from './Components/ProdutoUser/ProdutoUser';

class App extends Component {
  render() {
    return (

      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/


      <div>
        <h1>Huecommerce</h1>

        Lojinha top:
        <ProdutoUser name='Teste' endereco='https://uploads.spiritfanfiction.com/fanfics/historias/201704/uma-historia-completamente-aleatoria-8572110-030420172200.jpg'  preco='0,00'/>
      </div>
    );
  }
}

export default App;