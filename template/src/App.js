import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

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


      /*<div>
        <h1>Huecommerce</h1>
        <p>-------------------------------------</p>
        <h3>Login Cliente:</h3>
        <CampoLogin />*/
      <div>
       <Navbar />

       <div className="card text-center fixed-bottom float-right">
       <div className="card-footer text-muted">&copy;2018 Todos os direitos reservados.</div>
       </div>
      </div>
    );
  }
}

export default App;