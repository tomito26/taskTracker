import Task from "./Task";

const Tasks = ({ tasks }) =>{
    return(
    <div className="wrapper">
        {tasks.map(task=><Task key={task.id} task={task} />)}
    </div>
    );
}

export default Tasks