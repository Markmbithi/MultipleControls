import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {UserForm, Clock, LoginControl, DisplayArray, DisplayObjectArray} from './MyControls';
import Toggle from './Toggle';

const myname="Mark"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React Showcase</h1>
        </header>
        <p className="App-intro">
          I am {myname} and I got started. This app comprises different components and technologies just to showcase what can be done with react
        </p>
        <p>
        <b>Time Now:</b> <Clock/>
        </p>
        <div>
        <Toggle/>
        </div>
        <div>
        <h2> Toggle between login and logout button and the display message</h2>
        <LoginControl/>
        </div>
        <div>
        <h2>Normal array displayed using unordered list</h2>
        <DisplayArray/>
        </div>
        <div>
        <h2>Display an array of objects contents</h2>
        <DisplayObjectArray/>
        </div>
        <div>
        <h2>Usage of Forms</h2>
        <UserForm/>
        </div>
      </div>
    );
  }
}

export default App;
