import { doc, setDoc } from 'firebase/firestore'
import database from '../firebase-config'

const Task = ({ task })=>{
    const handleEdit = async (id)=>{
        const docRef = doc(database,"tasks",id)
        const payload = {...task,reminder:!task.reminder}
        await setDoc(docRef,payload,{merge: true})
    }
    return(
        <ul className="tasks">
            <li className={`task ${task.reminder ? "reminder" : "task"}`} onClick={()=>handleEdit(task.id,task)}>
                <span>{task.task}</span>
                <span>{task.datetime}</span>
            </li>
        </ul>
    );
}

export default Task;