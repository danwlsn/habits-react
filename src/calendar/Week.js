import React, { Component } from 'react';
import Day from './Day.js'

class Week extends Component {
  render() {
    const days = [1,2,3,4,5,6,7];
    const week = days.map((day) =>
      <Day day={day} />
    )
    return (
      <div className="Week">
        { week }
      </div>
    );
  }
}

export default Week;
