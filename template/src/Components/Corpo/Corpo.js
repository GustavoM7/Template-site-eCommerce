import React, {Component} from 'react';
import Home from '../Home/Home';
//import Sobre from '../Sobre/Sobre';
//import Contato from '../Contato/Contato';

class Corpo extends Component {
    state = {
        container: <Home/>
    }

    render(){
        return(
            <div>
                {this.state.container}
            </div>
        );
    };
}

export default Corpo;