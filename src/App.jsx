import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import ProgressTracker from "./Components/ProgressTracker";
export default function App(){
  return (
    <div> <h1>Personal Assistance</h1>
    <p>Task to do</p>
    <Taskform />
    <TaskList />
    <ProgressTracker />
    </div>
  )
}

