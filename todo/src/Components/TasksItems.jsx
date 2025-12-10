import { useState, useContext } from "react";
import MainContext from "../Context/MainContext";

function TasksItems({ task }) {

  const { updateTasks, deleteTask, toggleComplete } = useContext(MainContext);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(task.text);

  const saveEdit = () => {

    updateTasks(task._id, text);
    setEditing(false);

  };

  return (

    <div className="p-2">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id)}
        className="mr-2"
      />

      {editing ? (
        <>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[400px] h-12 p-3  rounded-2xl bg-gray-600 text-white"
          />

          <button onClick={saveEdit} className="bg-green-600 text-white p-2 ml-2 rounded-2xl w-20">
            Save
          </button>

        </>
      ) : (

        <span className="bg-gray-500  text-white rounded-2xl p-3 w-[400px] h-12 inline-block " style={{ textDecoration: task.completed ? "line-through" : "" }}>
          {task.text}
        </span>

      )}
      <button

        className="bg-red-600 text-white p-2 ml-3 rounded-2xl w-20"
        onClick={() => deleteTask(task._id)}

      >
        Delete
      </button>
      {!editing && (

        <button
          className="bg-yellow-600 text-white p-2 ml-3 rounded-2xl w-20 "
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        
      )}
    </div>
  );
}

export default TasksItems;
