import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";

export default function App(){
const [tasks, setTasks] =  useState([]);

useEffect( () => {
  localStorage.setItem
  ("tasks", JSON.stringify(tasks))
});

const addTask = (task) => {
  setTasks([...tasks,task]);
}

  return (
    <div> <h1>Personal Assistance</h1>
    <p>Task to do</p>
    <Taskform addTask = {addTask}/>
    <TaskList />
    <ProgressTracker />
    <button>Clear all tasks</button>
    </div>
  )
}


