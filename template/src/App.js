import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <br/>
       <br/>
       <br/>

       <div className="fixed-bottom card text-center">
       <div className="card-footer text-muted">&copy;2018 Todos os direitos reservados.</div>
       </div>
      </div>
    );
  }
}

export default App;