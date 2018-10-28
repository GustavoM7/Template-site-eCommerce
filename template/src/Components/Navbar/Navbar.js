import React, {Component} from 'react';
import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Contato from '../Contato/Contato';
import CampoLogin from '../CampoLogin/CampoLogin';

class Navbar extends Component {
    state = {
        container: <Home/>
    }

    GoSobre = () => {
        this.setState({
            container: <Sobre/>
        });
    }

    GoContato = () => {
        this.setState({
            container: <Contato/>
        });
    }

    GoHome = () => {
        this.setState({
            container: <Home/>
        });
    }

    GoLogin = () => {
        this.setState({
            container: <CampoLogin/>
        });
    }

    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <div class='container'>
                    <div class="navbar-brand" href="#"><b>HueCommerce</b></div>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <button class="btn btn-warning" onClick={this.GoHome}>Home</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-warning" onClick={this.GoSobre}>Sobre</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-warning" onClick={this.GoContato}>Contato</button>
                        </li>
                      </ul>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.GoLogin}>Login</button>
            </div>
            </div>
        </nav>
            {this.state.container}
        </div>
        );
    };
};

export default Navbar;
