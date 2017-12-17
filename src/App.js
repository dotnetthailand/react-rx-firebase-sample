import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';
import logo from './logo.svg';
import './App.css';
import Rx from 'rxjs'

class App extends Component {

  constructor() {
   super();
   this.state = {
     user: null
   }
 }

 login = () => {

   Rx.Observable.fromPromise(auth.signInWithPopup(provider))
   .map((result) => {
     const user = result.user;
     this.setState({
       user
     });
   })

 }

 logout = () => {

    Rx.Observable.fromPromise(auth.signOut())
   .subscribe(() => {
     this.setState({
       user: null
     });
   })

 }

 componentDidMount() {

   auth.onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    }
  })

 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React : {this.state.user?this.state.user.displayName:''}</h1>
        </header>
        <div id="authen">
        {this.state.user ?
          <button onClick={this.logout}>Log Out</button>
          :
          <button onClick={this.login}>Log In</button>
        }
        </div>
      </div>
    );
  }
}

export default App;
