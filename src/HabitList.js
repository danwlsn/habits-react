import React from 'react';

const HabitItem = ({title, id}) => {
  return (
    <div className="HabitItem">
      { title } { id }
    </div>
  )
}
export const HabitList = ({list}) => {
  let habitItems = null
  if (list){
    habitItems = list.map((item) => {
      return <li><HabitItem title={item.title} id={item.id} /></li>
    })
  }

  return (
    <div className="HabitList">
      { habitItems }
    </div>
  )
}

export default HabitList;
