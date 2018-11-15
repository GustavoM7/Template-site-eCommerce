import React, {Component} from 'react';
import firebase from 'firebase';
import Carrinho from './carrinho.svg';
import Alerts from '../Alerts/Alerts'

class Lojinha extends Component {
    Comprar = () =>{
        let user = firebase.auth().currentUser;
        let total = document.getElementById('alvototal').innerHTML;
        if(user !== null){
            let uid = user.uid;
            let email = user.email;
            firebase.database().ref('Compras').push().update({
                clienteEmail: email,
                clienteId: uid,
                total: total
            });
            firebase.database().ref('clientes/'+uid+'/carrinho/').remove();
            alert("Compra realizada com sucesso!");
            window.location.reload();
        } 
    }

    render(){
        return(
            <div className="container">
                <br/>
                <div class="card">
                    <h5 class="card-header text-center">
                        Só produto TOP!
                    </h5>
                        <div class="card-body">
                        <div className="" id="OffLogCard"><Alerts title="Você não está logado!" text="realize login para efetuar compras."/></div>
                        <div className='d-none' id='hidecar'>
                        <button type="button" class="btn btn-success cbtn fixed-bottom" id="Carrinho" data-toggle="modal" data-target="#exampleModal">
                            <img src={Carrinho} alt="carrinho" width={35} height={35} mode='fit'/>
                            <span class="badge badge-light" id="qtdcarrinho"></span>
                        </button>
                        </div>
                        <br/>
                        <h5 className="card-title">Produtos:</h5>
                        <div class="row text-center" id="alvo">
                            <p className="card-text"> Carregando...</p>
                        </div>
                    </div>
                </div>
                
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" id="alvocarrinho">
                            </div>
                            <div class="modal-footer">
                                <b>Total:</b> <div id="alvototal">0</div>
                                <button type="button" class="btn btn-success" onClick={this.Comprar}>Realizar compra</button>
        
                            </div>
                        </div>
                    </div>
                    </div>

                <br/>
                <br/>
            </div>
        )
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                let alert = document.getElementById('OffLogCard');
                alert.className = "d-none";
                let carrinho = document.getElementById('hidecar');
                carrinho.className = 'd-block';
            }
          });

        function CarregarItens() {
            firebase.database().ref('/Estoque').on('value', function (snapshot){
                    let alvo = document.getElementById("alvo");
                    alvo.innerHTML = "";
                snapshot.forEach(function(values){
                    let key = values.key;
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
                    firebase.storage().ref().child(key).getDownloadURL().then(function(url) {
                        foto.src = url;
                    })

                    foto.className = "img-thumbnail"

                    let des = document.createElement('p');
                    des.className = 'card-text';
                    des.innerHTML = 'Descrição: ' +descricao;

                    let produpreco = document.createElement('p');
                    produpreco.className = 'card-text';
                    produpreco.innerHTML = preco + " dolls";


                    let buttonsendcar = document.createElement('button');
                    buttonsendcar.className = 'btn btn-warning';
                    buttonsendcar.innerHTML = 'Add ao carrinho'
                    buttonsendcar.onclick = function () {
                        let user = firebase.auth().currentUser;
                        if(user === null){
                            alert("Realize login para prosseguir!");
                        } else {
                            let uid = user.uid;
                            firebase.database().ref('clientes/'+uid+'/carrinho').push().update({
                                produto: key,
                                qtd: 1
                            })
                        }

                    }

                    producardbody.appendChild(produtitulo);
                    producardbody.appendChild(foto);
                    producardbody.appendChild(des);
                    producardbody.appendChild(produpreco);
                    producard.appendChild(producardbody);
                    col.appendChild(producard);
                    producardbody.appendChild(buttonsendcar);
                    alvo.appendChild(col);

                })
            });
        };

        CarregarItens();

        CarregarCarrinho();

        function CarregarCarrinho() {
            let user = firebase.auth().currentUser;
            if (user !== null){
                let uid = user.uid;
                let alvo = document.getElementById("alvocarrinho");
                let qtd = document.getElementById("qtdcarrinho");
                let total = document.getElementById("alvototal");
                firebase.database().ref('clientes/'+uid+'/carrinho').on('value', function(snapshot){
                    alvo.innerHTML = "";
                    qtd.innerHTML = 0;
                    total.innerHTML = 0;
                    
                    snapshot.forEach(function(values){
                        let keyprod = values.key
                        let produtok = values.val().produto;
                        qtd.innerHTML++;
                        firebase.database().ref('Estoque/'+produtok).on('value', function(snapshot){
                            let nome = snapshot.val().nome;
                            let preco = snapshot.val().preco;
                            
                            let card = document.createElement('div');
                            card.className = 'card';
                            alvo.appendChild(card);

                            let cardbody = document.createElement('div');
                            cardbody.className = 'card-body';
                            card.appendChild(cardbody);
                            
                            let titutlo = document.createElement('h5');
                            titutlo.className = 'card-title';
                            titutlo.innerHTML = nome;
                            cardbody.appendChild(titutlo);

                            let parag1 = document.createElement('p');
                            parag1.className = 'card-text';
                            parag1.innerHTML = '<b>Preço: ' + preco + ' dolls</b>';
                            cardbody.appendChild(parag1);

                            let buttontodel = document.createElement('button');
                            buttontodel.className = 'btn btn-secondary';
                            buttontodel.innerHTML = 'Remover'
                            buttontodel.onclick = function () {
                                firebase.database().ref('clientes/'+uid+'/carrinho/'+keyprod).remove();
                            }
                            
                            cardbody.appendChild(buttontodel);
                            
                            total.innerHTML = parseInt(total.innerHTML) + parseInt(preco);
                        })
                    })
                })

            }
        }
    }
}

export default Lojinha;