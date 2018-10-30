import React, {Component} from 'react';
import firebase from 'firebase';

class Logout extends Component {
    FuncLogout = () => {
        firebase.auth().signOut().then(function(){
            console.log("saiu");
            window.location.reload();
        });
    }

    render(){
        return(
            <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={this.FuncLogout}>Logout</button>
        )
    }
}

export default Logout;