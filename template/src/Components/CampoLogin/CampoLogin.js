import React, {Component} from 'react';
import CampoCadastro from '../CampoCadastro/CampoCadastro';
//import firebase from 'firebase';

class CampoLogin extends Component {

    /*CriarUser = () => {
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
            console.log('Deu ruim!');
          })
    }*/

    state = {
        CadastroOn: ""
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
            /*<div>
            <input id='email' type='text' /><br/>
            <input id='senha' type='text' /><br/>
            <button onClick = {this.CriarUser} class="btn btn-primary">enviar</button>
            </div>*/
            <div class="container">
                <br/>
                <div class="card">
                    <h5 class="card-header text-center">Login</h5>
                    <div class="card-body">
                    <h5 class="card-title text-center">Realize o Login para compras online!</h5>
                    <form>
                        <div class="form-group row">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                                </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                                </div>
                        </div>   
                    </form>
                    <div class="container text-center">
                        <button type="button" class="btn btn-outline-success btn-lg">Entrar</button>
                    </div>
                    
                    <br/>
                    <h5 class="card-title text-center">Ainda não possui uma conta? Cadastre-se Já!</h5>
                    <div class="container text-center">
                        <button type="button" class="btn btn-warning btn-lg" onClick={this.ShowCadastro}>Cadastrar</button>
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

}

export default CampoLogin;