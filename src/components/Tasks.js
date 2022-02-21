import Task from "./Task";

const Tasks = ({ tasks,handleDelete }) =>{
    return(
    <div className="wrapper">
        {tasks.map(task=><Task key={task.id} task={task} handleDelete={handleDelete}/>)}
    </div>
    );
}

export default Tasks