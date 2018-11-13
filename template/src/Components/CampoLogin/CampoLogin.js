import React, {Component} from 'react';
import CampoCadastro from '../CampoCadastro/CampoCadastro';
import Alerts from '../Alerts/Alerts';
import firebase from 'firebase';

class CampoLogin extends Component {
    state = {
        CadastroOn: "",
        LEmailField: "",
        LSenhaField: "",
        alert: ""
    }

    UpdateLEmailValue = (event) => {
        this.setState({
            LEmailField: event.target.value
        });
    }

    UpdateSenhaValue = (event) => {
        this.setState({
            LSenhaField: event.target.value
        });
    }

    Logar = () => {
        let email = this.state.LEmailField;
        let senha = this.state.LSenhaField;
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
            firebase.auth().signInWithEmailAndPassword(email, senha).then(function() {
                console.log("Está logado!");
                window.location.reload();
            }).catch( function () {
                    let div = document.getElementById("escondida");
                    div.setAttribute("style", "display: block");
                }
            )
        })
    }

    ShowCadastro = () => {
        if (this.state.CadastroOn === "")
            this.setState({
                CadastroOn: <CampoCadastro />
            });
        else
            this.setState({
                CadastroOn: ""
            });
    }

    render(){
        return(
            <div className="container">
                <br/>
                <div className="card">
                    <h5 className="card-header text-center">Login</h5>
                    <div className="card-body">
                    <h5 className="card-title text-center">Realize o Login para compras online!</h5>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" id="inputEmail3" onChange={this.UpdateLEmailValue} value={this.state.LEmailField}/>
                                </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword3" onChange={this.UpdateSenhaValue} value={this.state.SenhaField}/>
                                </div>
                        </div>   
                    </form>
                    <div className="container text-center">
                        <button type="button" className="btn btn-outline-success btn-lg" onClick={this.Logar}>Entrar</button>
                    </div>
                    {this.state.alert}
                    <br/>
                    <div id="escondida" style={{display: 'none'}}>
                            <Alerts title="Erro inesperado!" text="Achou que ia logar? Achou errado, otário!"/> 
                    </div>
                    <h5 className="card-title text-center">Ainda não possui uma conta? Cadastre-se Já!</h5>
                    <div className="container text-center">
                        <button type="button" className="btn btn-warning btn-lg" onClick={this.ShowCadastro}>Cadastrar</button>
                        <br/>
                        <br/>
                    </div>
                        {this.state.CadastroOn}
                    </div>
                </div>
                <br/>
                <br/>
            </div>

        );
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { 
                console.log(user);
                console.log("Teste, Está logado!");
            } else {
                console.log("Não está logado!");
            }
        });
    }

}

export default CampoLogin;