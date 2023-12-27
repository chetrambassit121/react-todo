// rafce

import React, { useState } from 'react'

// npm install react-icons
import { FiEdit3 } from "react-icons/fi";          // importing edit pen 
import { FaRegTrashAlt } from "react-icons/fa";    // importing trash can 



const TodoList = ({ todos, delete_todo, updated_todo, complete_todo }) => {     // adding {todos} from App.jsx to get access to the todo objects , adding delete_todo & updateTodo function to access and use it from App.jsx 
  let [toggle, setToggle] = useState(false)                    // setting up our toggle feature of the edit form , we set useState to false so edit form isnt toggled until we click edit button  
  let [todoItem, setTodoItem] = useState("")                   // we want the todo (item), based on the edit button we clicked, to be in the edit form, so we can edit the todo
  let [todoId, setTodoId] = useState(0)                        // this is for getting the pre-edited todo id and the post-edited todo id , default to 0 so default id is 0 

  const toggleModal = (item, id) => {
    setToggle(true)
    setTodoItem(item)
    setTodoId(id)
  }
  // this function has item and id as props so we can edit the item and get its id before and after editing 
  // this function will toggle the edit form using setToggle(true) . 
  // the todo will be displayed in the edit form using setTodoItem(item)
  // get the id of the todo 

  return (
    <>
      <div className="todo-list">
        { todos.map( todo => (
        <div className="todo-list-item" key={todo.id}> 
          <div className="task">
            <input type="checkbox" onChange={(e) => complete_todo(e, todo.id)}/>
            <p id="t_task" className= {todo.status == "Completed" ? "strike":""}>{todo.task}</p> 
          </div>
          <div className="btn-container">
            <div className="edit"><FiEdit3 size={25} onClick={() => toggleModal(todo.task, todo.id)} /></div>
            <div className="del"><FaRegTrashAlt size={25}  onClick={ ()=> delete_todo(todo.id)} /></div>
          </div>
        </div>))}                    
      </div>

      { toggle && <div className="modal-container">  
        <div className="model">
          <h1>Update Form</h1>
          <form action="" placeholder="Update Todo" className="edit-form" onSubmit={()=>{updated_todo(todoId, todoItem); setToggle(false)}} >
            <input type="text" placeholder="Update todo" value={todoItem} onChange = {(e) => setTodoItem(e.target.value)} required /> 
            <button id="add">Add</button>
          </form>
          <div className="btn-container">
            <button className="cancel mod-btn" onClick={() => setToggle(false)}>Cancel</button>
          </div>
        </div>
      </div> }
    </>
  )
}

// { todos.map( todo => )}   ... mapping through the todos we defined in App.jsx ... like a for loop
// key={todo.id} passing in the key attribute as the todo id to ensure each todo is unique 
// <input type="checkbox" onChange={complete_todo}/> ... this checkbox will execute the complete_todo function to make the todo status Complete and mark off todo with css 
// <p id="t_task" className= {todo.status == "Completed" ? "strike":""}>{todo.task}</p> ... if todo status is Complete then execute the strike css styling to cross out the todo
// {todo.task,}   ... not we got the task for each todo 

// <div className="edit"><FiEdit3 size={25} onClick={() => toggleModal(todo.task) } /></div>  ...  
// this edit button when clicked, onClick={() => toggleModal(todo.task, todo.id) }, now contains the todo  task and id so it can be displayed in the edit form
// <div className="del"><FaRegTrashAlt size={25}  onClick={ ()=> delete_todo(todo.id)} /></div> ... 
// <input type="text" placeholder="Update todo" value={todoItem} ..... /> ... the value of this input field is the todoItem which is the todo.task that we want to edit and this is required
// value={todoItem} onChange = {(e) => setTodoItem(e.target.value)} ... onChange will allow us to edit the todo 
// 

// { toggle && <div className="modal-container"> </div> } is to toggle this form when user clicks on edit button 
// <form action="" placeholder="Update todo" className="edit-form" onSubmit={()=>updatedTodo(todoId, todoItem)} >  when the form is submitted we have the edited task with the same id 
// <button className="cancel mod-btn" onClick={() => setToggle(false)}>Cancel</button> when cancel button is clicked setToggle is now false which removes the edit form 


export default TodoList


















    // <div>TodoList</div>
    // <>
    //   <div class="container">
    //     <div class="todo-header">
    //         <h2>ToDo List</h2>
    //         <img src="/images/notebook.gif" height="50px" />
    //     </div>
    //     <div class="todo-body">
    //       <input
    //           type="text"
    //           id="todoText"
    //           class="todo-input"
    //           placeholder="Add your items"
    //       />
    //       <img
    //           src="/images/plus.png"
    //           alt="+"
    //           id="AddUpdateClick"
    //           onclick="CreateToDoItems();"
    //       />
    //     </div>
    //   </div>
    //   <div class="todo-list-item">
    //     <div class="task">
    //       <input type="checkbox"/>
    //       <p>ToDo Item</p>
    //     </div>
    //     <div class="btn-container">
    //       <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
    //       <div class="del"><i class="fa-solid fa-trash-can"></i></div>
    //     </div>
    //   </div>
    // </>