import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Test</h1>
        </header>

        <h2 className="App-title">Results</h2>
        <div className="App-intro">
          <List />
        </div>
      </div>
    );
  }
}

export default App;
