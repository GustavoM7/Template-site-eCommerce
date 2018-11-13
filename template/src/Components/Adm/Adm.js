import React, {Component} from 'react';
import firebase from 'firebase';

class Adm extends Component {
    state = {
        NameNewProd: "",
        PriceNewProd: ""
    }

    UpdateNNP = (event) => {
        this.setState({
            NameNewProd: event.target.value
        })
    }

    UpdatePNP = (event) => {
        this.setState({
            PriceNewProd: event.target.value
        })
    }

    SendNewProd = () => {
        let nome = this.state.NameNewProd;
        let preco = this.state.PriceNewProd;
        let desc = document.getElementById('desc').value;
        let input = document.getElementById('foto');
        let foto = input.files[0];

        if (nome !== "" && preco !== "" && desc !== "" && foto){
            let novaxav = firebase.database().ref().child('Estoque').push().key;
            firebase.database().ref('Estoque/'+novaxav).update({
                nome: nome,
                preco: preco,
                descricao: desc  
            });

            firebase.storage().ref().child(novaxav).put(foto).then(function(snapshot) {
                console.log('Uploaded file!');
                window.location.reload();
            });
            
        }
    }

    LimparHist = () => {
        firebase.database().ref('Compras').remove();
    }

    render(){return(
        <div className="container">
            <br/>
            <div class="card">
                <h5 class="card-header text-center">Área de administração</h5>
                <div class="card-body">
                    <h5 class="card-title">Produtos:</h5>
                    <p class="card-text row text-center" id="CampoProduto">Carregando...</p>
                    <h5 className="card-title">Novo produto:</h5>
                    <form id="formProdu">
                        <div class="form-row">
                            <div class="col">
                                <label for="nomedoproduto">Nome:</label>
                                <input type="text" class="form-control" id="nomedoproduto" onChange={this.UpdateNNP} value={this.state.NameNewProd}/>
                            </div>
                            <div class="col">
                                <label for="precodoproduto">Preço:</label>
                                <input type="number" class="form-control" id="precodoproduto" onChange={this.UpdatePNP} value={this.state.PriceNewProd}/>
                            </div>
                        </div>
                        <br/>
                        <div class="form-group">
                            <label for="desc">Descrição:</label>
                            <textarea class="form-control" id="desc" rows="3"/>
                        </div>
                        <br/>
                        <div>
                            <label for="foto">Foto:</label><br/>
                                <input type="file" id="foto" name="foto" accept="image/png, image/jpeg" />
                        </div>
                    </form>
                    <br/>
                    <p className="text-center"><button class="btn btn-success" onClick={this.SendNewProd}>Enviar</button></p>
                    <br/>

                    <br/>
                    <h5 className="card-title">Histórico de Compras:</h5>
                    <p className="card-text" id="CampoHistorico">Carregando...</p>
                    <p className="text-center"><button className="btn btn-secondary" onClick={this.LimparHist}>Limpar histórico</button></p>
                </div>
            </div>
        </div>
    )}

    componentDidMount(){

        function CarregarCompras() {
            firebase.database().ref('Compras').on('value', function(snapshot){
                let alvo = document.getElementById("CampoHistorico");
                alvo.innerHTML = "";
                let tabela = document.createElement('table');
                tabela.className = 'table';
                alvo.appendChild(tabela);
                let tcabecalho = document.createElement('thead');
                tabela.appendChild(tcabecalho);
                let tr = document.createElement('tr');
                tcabecalho.appendChild(tr);
                let th1 = document.createElement('th');
                th1.scope = 'col';
                th1.innerHTML = '#';
                tr.appendChild(th1);
                let th2 = document.createElement('th');
                th2.scope = 'col';
                th2.innerHTML = 'Email';
                tr.appendChild(th2);
                let th3 = document.createElement('th');
                th3.scope = 'col';
                th3.innerHTML = 'Valor';
                tr.appendChild(th3);
                let corpo = document.createElement('tbody');
                tabela.appendChild(corpo);

                let cont = 0;

                snapshot.forEach(function(values){
                    cont++;
                    let cliente = values.val().clienteEmail;
                    let total = values.val().total;

                    let item = document.createElement('tr');

                    let thitem = document.createElement('th');
                    thitem.scope = 'row';
                    thitem.innerHTML = cont;
                    item.appendChild(thitem);

                    let tdcliente = document.createElement('td');
                    tdcliente.innerHTML = cliente;
                    item.appendChild(tdcliente);

                    let tdvalor = document.createElement('td');
                    tdvalor.innerHTML = total;
                    item.appendChild(tdvalor);

                    corpo.appendChild(item);
                })
            })
        }

        function CarregarItens() {
            firebase.database().ref('/Estoque').on('value', function (snapshot){
                    let alvo = document.getElementById("CampoProduto");
                    alvo.innerHTML = "";
                snapshot.forEach(function(values){
                    let xav = values.key;
                    let nome = values.val().nome;
                    let descricao = values.val().descricao;
                    let preco = values.val().preco;
                    let col = document.createElement('div');
                    col.className = 'col-sm-6';
                    let producard = document.createElement('div');
                    producard.className = 'card';

                    let producardbody = document.createElement('div');
                    producardbody.className = 'card-body';

                    let produtitulo = document.createElement('h5');
                    produtitulo.className = 'card-title';
                    produtitulo.innerHTML = nome;

                    let foto = document.createElement('img');
                    firebase.storage().ref().child(xav).getDownloadURL().then(function(url) {
                        foto.src = url;
                    })

                    let des = document.createElement('p');
                    des.className = 'card-text';
                    des.innerHTML = 'Descrição: ' +descricao;

                    let produpreco = document.createElement('p');
                    produpreco.className = 'card-text';
                    produpreco.innerHTML = preco + " dolls";

                    let buttontoatt = document.createElement('button');
                    buttontoatt.className = 'btn btn-warning';
                    buttontoatt.innerHTML = 'Atualizar';
                    buttontoatt.onclick = function() {
                        let newname = document.createElement('input');
                        let newpreco = document.createElement('input');
                        newname.placeholder = "Novo nome";
                        newname.type = 'text';
                        newpreco.placeholder = "Novo preco";
                        newpreco.type = 'number';
                        let quebra = document.createElement('br');
                        producardbody.appendChild(quebra);
                        producardbody.appendChild(newname);
                        producardbody.appendChild(newpreco);
                        let quebra2 = document.createElement('br');
                        let buttonatt = document.createElement('button');
                        producardbody.appendChild(quebra2);
                        let campodes = document.createElement('input');
                        campodes.placeholder = 'Nova descrição';
                        producardbody.appendChild(campodes);
                        let quebra3 = document.createElement('br');
                        producardbody.appendChild(quebra3);
                        let novafoto = document.createElement('input');
                        novafoto.type = 'file';
                        producardbody.appendChild(novafoto);

                        buttonatt.innerHTML = "Enviar";
                        buttonatt.onclick = function() {
                            if(newname.value && newpreco.value && novafoto.files[0] && campodes){
                                firebase.database().ref("Estoque/" + xav).update({
                                    nome: newname.value,
                                    preco: newpreco.value,
                                    descricao: campodes.value
                                })

                                firebase.storage().ref().child(xav).put(novafoto.files[0]).then(function(snapshot) {
                                    console.log('Uploaded file!');
                                    window.location.reload();
                                });
                            }
                        }
                        producardbody.appendChild(buttonatt);
                    }

                    let buttontodel = document.createElement('button');
                    buttontodel.className = 'btn btn-secondary';
                    buttontodel.innerHTML = 'Remover'
                    buttontodel.onclick = function () {
                        firebase.database().ref('/Estoque/' + xav).remove();
                    }

                    producardbody.appendChild(produtitulo);
                    producardbody.appendChild(foto);
                    producardbody.appendChild(des);
                    producardbody.appendChild(produpreco);
                    producard.appendChild(producardbody);
                    col.appendChild(producard);
                    producardbody.appendChild(buttontoatt);
                    producardbody.appendChild(buttontodel);
                    alvo.appendChild(col);

                })
            });
        };

        CarregarItens();
        CarregarCompras();
    }
}

export default Adm;