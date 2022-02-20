import { collection, onSnapshot, setDoc,doc } from 'firebase/firestore';
import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import database from './firebase-config';

function App() {
  const [tasks,setTasks] = useState([])
  useEffect(()=>{
    onSnapshot(collection(database,"tasks"),
      (snapshot)=> setTasks(snapshot.docs.map(doc => ({...doc.data(),id:doc.id})))
    )
  },[])

  return (
    <div className="container">
      <Header/>
      <TaskForm />
      <Tasks tasks={tasks}  />
    </div>
  );
}

export default App;
