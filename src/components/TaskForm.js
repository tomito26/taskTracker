import { useState } from "react";
import { addDoc,collection } from 'firebase/firestore'
import database   from '../firebase-config'
const TaskForm = () =>{
    const [todo,setTodo] = useState({
        task:"",
        datetime:"",
        reminder:false
    });
    
    const { task,datetime,reminder } = todo;
        
    const handleNewTask = async (e) =>{
        e.preventDefault();
        if(!task && !datetime){
            alert("All fields are required");
            return
        }
        const collectionRef = collection(database,"tasks");
        const payload = todo;
        await addDoc(collectionRef,payload)
        setTodo({
            task:"",
            datetime:"",
            reminder:false
        })
      

    }


    return(
    <form onSubmit={handleNewTask}>
        <div className="form-group">
            <label htmlFor="task">Task</label>
            <input 
              type="text" 
              name="task" 
              id="task" 
              className="form-control" 
              placeholder="Add Task"
              value={todo.task}
              onChange={(e)=>setTodo({...todo,[e.target.name]:e.target.value})}
            />
        </div>
        <div className="form-group">
            <label htmlFor="datetime">Day & Time</label>
            <input 
              type="text" 
              name="datetime" 
              id="datetime" 
              className="form-control" 
              placeholder="Add Day and Time" 
              value={todo.datetime}
              onChange={(e)=>setTodo({...todo,[e.target.name]:e.target.value})}
            />
        </div>
        <div className="form-input">
            <label htmlFor="reminder">Set Reminder</label>
            <input 
              type="checkbox" 
              name="reminder" 
              id="reminder" 
              className="form-control" 
              value={todo.reminder}
              onChange={(e)=>setTodo({...todo,[e.target.name]:e.target.checked})}
            />
        </div>
        <button className="task-btn">Save Task</button>
    </form>
    );
}

export default TaskForm
