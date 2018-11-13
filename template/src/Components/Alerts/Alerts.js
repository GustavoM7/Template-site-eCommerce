import React, {Component} from 'react';

class Alerts extends Component {
    recarregar = () => {
        window.location.reload();
    }

    render(){
        return(
            <div class="alert alert-warning alert-dismissible fade show text-center" role="alert">
                <strong>{this.props.title}</strong> {this.props.text}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={this.recarregar}>
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
        );
    };
}

export default Alerts;