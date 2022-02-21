import { collection, onSnapshot, setDoc,doc, deleteDoc } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import database from './firebase-config';

function App() {
  const [tasks,setTasks] = useState([])
  const [showForm,setShowForm] = useState(false)
  useEffect(()=>{
    onSnapshot(collection(database,"tasks"),
      (snapshot)=> setTasks(snapshot.docs.map(doc => ({...doc.data(),id:doc.id})))
    )
  },[])

  const handleDelete = async (id)=>{
    const docRef = doc(database,"tasks",id)
    await deleteDoc(docRef)
  }

  return (
    <div className="container">
      <Header onAdd={()=>setShowForm(!showForm)} showForm={showForm}/>
      {showForm && <TaskForm />}
      <Tasks tasks={tasks}  handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
