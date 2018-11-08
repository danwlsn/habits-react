import React, { Component } from 'react';
import './Day.css'

class Day extends Component {
  render() {
    return (
      <div 
        className={`Day ${this.props.classNames}`}
        onClick={() => this.props.handleClick(this.props.day)}
      >
        { this.props.day }
      </div>
    );
  }
}

export default Day;
