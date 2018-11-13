import React, { Component } from 'react';
import axios from 'axios';
import Month from './calendar/Month.js';
import HabitList from './HabitList.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      'habitList': null
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/habit/')
      .then((response) =>{
        this.setState((state, props) => {
          return {
            'habitList': response.data
          }
        })
      })
  }

  render() {

    return (
      <div className="App">
        <HabitList list={this.state.habitList} />
        <Month />
      </div>
    );
  }
}

export default App;
