import React from 'react';

export const AddHabit = ({submit}) => {

  return (
    <div className="addHabit">
      <input onKeyPress={submit} />
    </div>
  )
}

export default AddHabit
