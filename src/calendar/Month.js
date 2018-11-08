import React, { Component } from 'react';
import Day from './Day.js';
import './Month.css';

class Month extends Component {
  constructor(props){
    super(props)
    this.state = {
      checks: [],
      streak: 0
    }
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  calculateStreak(){
    let streak = 0;
    let highestStreak = 0;
    let last = -1;

    let sorted = this.state.checks.sort(function(a, b){return a-b})
    sorted.forEach(function(index){
      if (index == last+1){
        streak++
      } else {
        streak = 0
      }
      if (streak+1 > highestStreak){
        highestStreak = streak + 1
      }
      last = index
    });

    this.setState((state, props) => {
      return { streak: highestStreak }
    })

  }

  handleDayClick(day){
    let newChecks = this.state.checks
    if (this.state.checks.indexOf(day) > -1){
      newChecks.splice(this.state.checks.indexOf(day), 1)
    } else {
      newChecks.push(day)
    }

    this.setState((state, props) => {
      return {checks: newChecks}
    });

    this.calculateStreak()
  }

  render() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const today = new Date()
    const currentMonth = months[today.getMonth()]
    const daysInMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()

    let days = []
    for (var d=1; d <= daysInMonth; d++){
      let classNames = "" 
      if (this.state.checks.indexOf(d) > -1){
        classNames = "checked" 
      }
      days.push(<Day day={d} key={d} classNames={classNames} handleClick={this.handleDayClick}/>)
    }

    const checkedDays = this.state.checks.join(', ')

    let streakMsg = ""
    if (this.state.streak > 0){
      streakMsg = 'Current streak: ' + this.state.streak
    }

    return (
      <div className="Month">
        <h1>{ currentMonth }</h1>
        <h2>{ streakMsg }</h2>
        { days }
      </div>
    );
  }
}

export default Month;
