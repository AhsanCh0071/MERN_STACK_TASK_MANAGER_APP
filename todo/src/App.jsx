import './App.css'
import TodayContext from './Context/TodayContext'
import AddTasks from './Components/AddTasks'
import TasksList from './Components/TasksList'

function App() {

  return (
    
    <TodayContext>
      <>
        <h1 className='text-3xl font-bold'>Task Management</h1>
        <AddTasks/>
        <TasksList/>
      </>
    </TodayContext>
    
  )
}

export default App
