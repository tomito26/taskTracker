import { doc, setDoc } from 'firebase/firestore'
import database from '../firebase-config'
import { AiOutlineClose } from 'react-icons/ai'

const Task = ({ task,handleDelete })=>{
    const handleEdit = async (id)=>{
        const docRef = doc(database,"tasks",id)
        const payload = {...task,reminder:!task.reminder}
        await setDoc(docRef,payload,{merge: true})
    }
    return(
        <ul className="tasks">
            <li className={`task ${task.reminder ? "reminder" : "task"}`} onClick={()=>handleEdit(task.id,task)}>
                <span>{task.task}</span>
                <span className='datetime'>{task.datetime}</span>
                
            </li>
            <AiOutlineClose className='close-btn' onClick={()=>handleDelete(task.id)}/>
        </ul>
    );
}

export default Task;