import React, { Component } from 'react';
import logo from './logo.svg';
import thumbsUp from './assets/20180618_112642.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to elia.co.il!</h1>
        </header>
        <p className="App-intro">
          Created by <a className="t-txt-link" href="https://github.com/facebook/create-react-app">create-react-app</a>
        </p>
        <p className="App-intro">
          Powered by <a className="t-txt-link" href="https://azure.microsoft.com/en-us/">Azure Cloud.</a>
        </p>
        <img src={thumbsUp} className="splash-main-image" title="huzza!" alt="huzza!" />
      </div>
    );
  }
}

export default App;
