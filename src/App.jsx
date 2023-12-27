import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoSearch from './components/ToDoSearch'
import ToDoFilter from './components/ToDoFilter'
import TodoList from './components/TodoList'

function App() {
  
  let [todos, setTodos] = useState([                                  // useState being used with this list containing arrays of the following objects
    { id: 0, task: "Learn JavaScript", status: "Active" },
    { id: 1, task: "Read a self-help book", status: "Active" },
    { id: 2, task: "Play PS5", status: "Active" },
    { id: 3, task: "Watch YouTube videos", status: "Active" },
    // { id: 5, task: "Pray to God", status: "Active" },
  ]);               
  // we want to add these todos to the ToDoList component   .... const TodoList = ({ todos }) => {



  const addToDo = (data) => {                               

    setTodos([ ...todos, data = { ...data, id: parseInt(todos[todos.length-1].id)+1, status:"Active" } ])
    console.log(data)

  }
  // declaring addToDo function .. we want the (data) being submitted in ToDoSearch.jsx <form> during the onSubmit .. 
  // using setTodos to access the list containing arrays of our todos ... using spread operator (a way of de-structuring the todos) on todos [ ...todos, data] .. 
  // we want to append the new data coming in with data = { ...data, id: parseint(todos[todos.length-1].id)+1, status:"Active" }, using spread operator on data to de-structure and expand data
  // id: parseint(todos[todos.length-1].id)+1 will create a unique id for us ... we are getting the id of the last element in todos and adding 1 to the new todo 
  // making the status Active .. this will ensure each todo data created has its id, task 



  const deleteTodo = (id) =>  {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  // declaring function deleteTodo, using setTodos to access the list containing arrays of our todos
  // when the delete button for a todo is clicked, an id is going to be sent to this function and we want to filter out all the id's that are not the one we received then its removed   



  const updateTodo = (id, new_task) => {
    let todo = todos[id]
    let updatedTodo = { ...todo, task: new_task, status: 'Active'}
    setTodos(todos.map(t => t.id == id ? updatedTodo : t))
  }
  // declaring function updateTodo with id, and new_task as props 
  // todo will equal the current todos id 
  // updatedTodo will equal , using spread operator on todo to destructure its data, the old task will now be the new_task, make status of the new_task Active  
  // setTodos , we want to map through it, t => t.id == id ? updatedTodo : t means if the pre-edited todo id equals this post-edited id, then execute updatedTodo to the edited todo
  

  const completeTodo = (e, id) => {
    if(e.target.checked){
      setTodos(todos.map(todo => todo.id == id ? {...todo, status: "Completed"}: todo))
    }
    else{
      setTodos(todos.map(todo => todo.id == id ? {...todo, status: "Active"}: todo))
    }
  }
  // declaring function completetodo which will set the todos to complete 
  // if(e.target.checked)   ... if the checkbox is checked 
  // setTodos(todos.map(todo => todo.id == id ? {...todo, status: "Completed"}: todo))   ... map through the todos , if the todo.id equals the todo is we want to check then set status to Completed  
  // else set todo status to Active 



  const filter_todo = (text) => {
    setTodos(todos.filter(todo => todo.status === text))
  }
  // filter the todos based on status , text represents the status Complete or Active


  return (
    
    <div className='todo-container'>
      <ToDoSearch add_todo = { addToDo } />
      <ToDoFilter filter_todo={filter_todo} />
      <TodoList todos = {todos} delete_todo = { deleteTodo } updated_todo = { updateTodo } complete_todo = { completeTodo } />     
    </div>
    // ToDoSearch adding a prop add_todo = { addToDo } to so we can use this function in this component to add new todos

    // ToDoFilter adding filter_todo function as a prop so we can use it in this component

    // ToDoList adding a prop todos equal to the {todos} to get the todos in the list of arrays, adding the prop delete_todo = { deleteTodo } now we can use the function to delete todos
    // adding prop updated_todo equal to the function updatedTodo so now our todos can be updated after being edited.

  )
}

export default App








// const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }





{/* <div className='todo-container'>
<h1>hello world</h1>
<ToDoSearch />
<ToDoFilter />
<TodoList />
</div> */}