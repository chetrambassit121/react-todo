import React from 'react'

const ToDoFilter = ({filter_todo}) => {
  return (
    
    <select className="select" id="" onChange={(e) => filter_todo(e.target.value)}>
      <option value="Active">Active</option>
      <option value="Completed">Completed</option>
    </select>
    
  )
}

export default ToDoFilter