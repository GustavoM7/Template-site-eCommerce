import React, {Component} from 'react';

class CampoCadastro extends Component {
    render(){
        return(
            <div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Email:</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Password:</label>
                            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">Cidade:</label>
                            <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Estado:</label>
                                <input type="text" class="form-control" id="inputState"/>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">CEP:</label>
                                <input type="text" class="form-control" id="inputZip"/>
                        </div>
                    </div>
                </form>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        )
    };
}

export default CampoCadastro;