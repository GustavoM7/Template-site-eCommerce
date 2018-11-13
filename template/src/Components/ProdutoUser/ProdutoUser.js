import React, {Component} from 'react';

class ProdutoUser extends Component {
    render(){
        return(
            <div>
                <div class="card w-50">
                 <div class="card-body">
                    <h5 class="card-title">{this.props.name}</h5>
                        <p class="card-text">{this.props.preco}.</p>
                        <p class="card-text">--Descrição do Produto...--</p>
                        <button class="btn btn-warning">Comprar</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ProdutoUser;