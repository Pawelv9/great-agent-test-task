import React, { Component } from 'react';
import './App.css';
import properties$ from './mock';
import Table from './components/Table';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Table/>
      </div>
    );
  }
}

export default App;
