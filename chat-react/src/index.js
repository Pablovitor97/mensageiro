import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import{ Route, BrowserRouter as Router } from 'react-router-dom';
import LoginComponent from './login/login';
import SignupComponent from './signup/signup';
import DashboardComponent from './dashboard/dashboard';
import HostComponent from './host/host';




const firebase = require("firebase");


firebase.initializeApp({
    apiKey: "AIzaSyDeKpfPAc9h4KY3-E6qe46-b0cp3SydnC8",
    authDomain: "chat-react-b5440.firebaseapp.com",
    databaseURL: "https://chat-react-b5440.firebaseio.com",
    projectId: "chat-react-b5440",
    storageBucket: "chat-react-b5440.appspot.com",
    messagingSenderId: "191781482316",
    appId: "1:191781482316:web:dc0ff252d24842a59de9e9"
});

/*rodar o login, Sinup e dashboard em partes diferentes
exemplo: localhost:300/login...localhost:300/signup*/
const routing =(
  <Router>
    <div id='routing-container'>
      <Route path='/' component={HostComponent}></Route>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
