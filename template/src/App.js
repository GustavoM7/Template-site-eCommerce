import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Navbar}/>
          <Route component={NotFound}/>
        </Switch>
       </BrowserRouter>
       <div className="fixed-bottom card text-center">
       <div className="card-footer text-muted">&copy;2018 Todos os direitos reservados.</div>
       </div>
       
      </div>
    );
  }
}

export default App;