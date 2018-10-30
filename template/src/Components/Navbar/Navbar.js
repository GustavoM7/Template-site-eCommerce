import React, {Component} from 'react';
import firebase from 'firebase';
import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Contato from '../Contato/Contato';
import CampoLogin from '../CampoLogin/CampoLogin';
import Logout from '../Logout/Logout';

class Navbar extends Component {
    state = {
        container: <Home/>,
    }

    GoToPag = pag => {
        this.setState({
            container: pag
        });
    }

    FuncLogout = () =>{
        firebase.auth().signOut().then(function(){
            console.log("saiu");
        });
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                    <div className='container'>
                    <div className="navbar-brand" href="#"><b>HueCommerce</b></div>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <button className="btn btn-warning" onClick={() => this.GoToPag(<Home/>)}>Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning" onClick={() => this.GoToPag(<Sobre/>)}>Sobre</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-warning" onClick={() => this.GoToPag(<Contato/>)}>Contato</button>
                        </li>
                      </ul>
                    <div id="toLogin">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => this.GoToPag(<CampoLogin/>)}>Login</button>
                    </div>
                    <div id="toLogout" style={{display: 'none'}}>
                    <Logout/>
                    </div>

            </div>
            </div>
        </nav>
            {this.state.container}
        </div>
        );
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              let buttonLogin = document.getElementById("toLogin");
              let buttonLogout = document.getElementById("toLogout");
              buttonLogin.setAttribute("style", "display: none");
              buttonLogout.setAttribute("style", "display: block");
            }
          });
    }
};

export default Navbar;