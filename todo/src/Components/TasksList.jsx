import { useContext } from "react";
import MainContext from "../Context/MainContext";
import TasksItems from "./TasksItems";

function TasksList() {

  const { tasks } = useContext(MainContext);

  return (

    <div>
      {tasks.length === 0 ? (
        <p>No Tasks Found</p>
      ) : (
        tasks.map((task) => <TasksItems key={task._id} task={task} />)
      )}
    </div>
    
  );
}

export default TasksList;
