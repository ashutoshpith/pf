import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/layouts/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
