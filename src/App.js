import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <div className="App">
          <h1>Hello, World! </h1>
          <h2>Hello, World! </h2>
          <h3>Hello, World! </h3>
          <h4>Hello, World! </h4>
          <h5>Hello, World! </h5>
          <h6>Hello, World! </h6>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
