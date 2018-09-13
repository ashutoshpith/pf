import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Navbar from './components/layouts/Navbar';
import Hero from './components/layouts/Hero';
import Footer from './components/layouts/Footer';
import Card from './components/layouts/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
        <h1 className="App-title">
        <Hero/>
        </h1>
        <br/>
        <Card/>
        </header>
        <p className="App-footer">
         <Footer/>
        </p>
      </div>
    );
  }
}

export default App;
