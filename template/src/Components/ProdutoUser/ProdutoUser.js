import React, {Component} from 'react';

class ProdutoUser extends Component {
    render(){
        return(
            <div>
                <p><b>Nome:</b> {this.props.name}</p>
                <img src={this.props.endereco}></img>
                <p><b>Preço:</b> {this.props.preco}</p>
            </div>
        );
    };
}

export default ProdutoUser;