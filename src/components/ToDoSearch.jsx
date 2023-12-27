// rafce


import React from 'react'
import { useForm } from 'react-hook-form'           // importing this for our create to do form  


const ToDoSearch = ({add_todo}) => {                 // we created this add_todo function in App.jsx and now adding into this ToDoSearch component .. 

  const { register, handleSubmit, reset, formState:{errors} } = useForm()    // { register } is from useForm which we will use to help get the data from input , 
                                                                             // handleSubmit assists use as well with handling the form
                                                                             // reset is for resetting the form after submission so the data is cleared from the forms input
                                                                             // formState:{errors} will help up with error messages we want user to see during certain cases like an empty form is submitted

  return (
    <div className="todo-search">
      {/* <form action="" onSubmit={data=>console.log(data)}>*/}
      <form action="" onSubmit={handleSubmit((data)=>{
        add_todo(data);
        reset()
      })}>                       
        <input type="text" id="task" placeholder="Enter Todo"  { ...register("task", { required: true }) } />    
        <button>Add</button>
      </form>      
      { errors.task?.type == "required" && <small> This field cannot be left blank. </small> }   
    </div>
  )
}
// on the form field we add the attribute onSubmit with handleSubmit(data) .. followed by the arrow function => .. so now our add_todo(data) function will be executed and create a todo based on the data user submits, reset will reset the form 
// we want to get the value from the input field, using register with the spread operator to capture the task of the todo { ...register("task") } , this task is a requirement so { required: true }
// { errors.task?.type == "required" && <small> This field cannot be left blank. </small> }  ... if required isn't true display the <small> error message    


export default ToDoSearch