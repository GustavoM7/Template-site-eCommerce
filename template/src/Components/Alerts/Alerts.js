import React, {Component} from 'react';

class Alerts extends Component {
    render(){
        return(
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{this.props.title}</strong> {this.props.text}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>
        );
    };
}

export default Alerts;