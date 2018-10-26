import React, {Component} from 'react';
import firebase from 'firebase';

class CampoLogin extends Component {

    CriarUser = () => {
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        firebase.auth().createUserWithEmailAndPassword(email, senha).catch(function(error) {
            console.log('Deu ruim!');
          })
    }
    render(){
        return(
            <div>
            <input id='email' type='text' /><br/>
            <input id='senha' type='text' /><br/>
            <button onClick = {this.CriarUser} >enviar</button>
            </div>
        )
    }

}

export default CampoLogin;