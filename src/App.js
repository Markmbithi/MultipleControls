import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';

const myname="Mark"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          I am {myname} and I got started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        <Clock/>
        </p>
      </div>
    );
  }
}

export default App;
