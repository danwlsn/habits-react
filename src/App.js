import React, { Component } from 'react';
import axios from 'axios';
import Month from './calendar/Month.js';
import HabitList from './HabitList.js'
import AddHabit from './AddHabit.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      'habitList': null
    }

    this.submitHabit = this.submitHabit.bind(this)
  }
  updateHabitList(){
    console.log('updateing list')
    axios.get('http://localhost:5000/habit/')
      .then((response) =>{
        this.setState((state, props) => {
          return {
            'habitList': response.data
          }
        })
      })
  }
  submitHabit(e){
    if (e.key === 'Enter'){
      axios.post('http://localhost:5000/habit/',
        {
          'title': e.target.value
        })
        .then((response) =>{
          this.updateHabitList()
          this.input.value = "";
        })
    }
  }
  componentDidMount(){
    this.updateHabitList()
  }

  render() {

    return (
      <div className="App">
        <HabitList list={this.state.habitList} />
        <AddHabit ref='input' submit={this.submitHabit} />
        <Month />
      </div>
    );
  }
}

export default App;
