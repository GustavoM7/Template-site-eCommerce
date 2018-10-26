import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                    <div class='container'>
                    <div class="navbar-brand" href="#"><b>HueCommerce</b></div>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <button class="btn btn-warning">Home</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-warning">Sobre</button>
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-warning">Contato</button>
                        </li>
                      </ul>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="button">Login</button>
            </div>
            </div>
        </nav>
        </div>
        );
    };
};

export default Navbar;