import React, {Component} from 'react';
import firebase from 'firebase';
import Alerts from '../Alerts/Alerts';

class CampoCadastro extends Component {
    state = {
        EmailField: "",
        SenhaField: "",
        EnderecoField: "",
        CidadeField: "",
        EstadoField: "",
        CEPField: "",
        alerts: ""
    }

    UpdateEmailValue = (event) => {
        this.setState({
            EmailField: event.target.value
        });
    }

    UpdateSenhaValue = (event) => {
        this.setState({
            SenhaField: event.target.value
        });
    }

    UpdateEnderecoValue = (event) => {
        this.setState({
            EnderecoField: event.target.value
        });
    }

    UpdateCidadeValue = (event) => {
        this.setState({
            CidadeField: event.target.value
        });
    }

    UpdateEstadoValue = (event) => {
        this.setState({
            EstadoField: event.target.value
        });
    }

    UpdateCEPValue = (event) => {
        this.setState({
            CEPField: event.target.value
        });
    }

    MudaAlerta = () => {
        this.setState({
            alerts: <Alerts title="Erro inesperado!" text="Verifique os dados de cadastro!" />
        });
    }

    NovoCliente = () => {
        let email = this.state.EmailField;
        let senha = this.state.SenhaField;
        let endereco = this.state.EnderecoField;
        let cidade = this.state.CidadeField;
        let estado = this.state.EstadoField;
        let CEP = this.state.CEPField;
        if (this.state.EstadoField !== "" && this.state.CidadeField !== "" && this.state.CEPField !== "" && this.state.EnderecoField !== ""){
            firebase.auth().createUserWithEmailAndPassword(email, senha).then(function(){
                let userId = firebase.auth().currentUser.uid;        
                firebase.database().ref('clientes/' + userId).set({
                    email: email,
                    endereco: endereco,
                    cidade: cidade,
                    estado: estado,
                    CEP: CEP
                  });                
            }).catch(this.setState({
                alerts: <Alerts title="Erro inesperado!" text="Verifique os dados de cadastro!" />
            }))
        } else {
            this.setState({
                alerts: <Alerts title="Erro inesperado!" text="Preencha todos os dados!" />
            });
        }
    }

    render(){
        return(
            <div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email:</label>
                            <input type="email" class="form-control" id="inputEmail4" onChange={this.UpdateEmailValue} value={this.state.EmailField}/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Senha:</label>
                            <input type="password" class="form-control" id="inputPassword4" onChange={this.UpdateSenhaValue} value={this.state.SenhaField}/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Endereço:</label>
                        <input type="text" class="form-control" id="inputAddress" onChange={this.UpdateEnderecoValue} value={this.state.EnderecoField}/>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Cidade:</label>
                            <input type="text" class="form-control" id="inputCity" onChange={this.UpdateCidadeValue} value={this.state.CidadeField}/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Estado:</label>
                                <input type="text" class="form-control" id="inputState" onChange={this.UpdateEstadoValue} value={this.state.EstadoField}/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">CEP:</label>
                                <input type="text" class="form-control" id="inputZip" onChange={this.UpdateCEPValue} value={this.state.CEPField}/>
                        </div>
                    </div>
                </form>
                <div class="container text-center">
                        <button type="button" class="btn btn-outline-success btn-lg" onClick={this.NovoCliente}>Enviar</button>
                        <br/><br/>
                        {this.state.alerts}
                </div>
                        
            </div>
        )
    };
}

export default CampoCadastro;