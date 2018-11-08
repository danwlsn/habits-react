import React, { Component } from 'react';
import Month from './calendar/Month.js';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Month />
      </div>
    );
  }
}

export default App;
