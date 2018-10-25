import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDuurlI7egkjWe04ar_o8sCN9Du8uscMV0",
    authDomain: "template-ecommerce.firebaseapp.com",
    databaseURL: "https://template-ecommerce.firebaseio.com",
    projectId: "template-ecommerce",
    storageBucket: "template-ecommerce.appspot.com",
    messagingSenderId: "893640479360"
  };
  firebase.initializeApp(config);