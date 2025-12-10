import { useState, useContext } from "react";
import MainContext from "../Context/MainContext";

function AddTasks() {

  const { addTask } = useContext(MainContext);
  const [text, setText] = useState("");

  const handleAddTask = (e) => {

    e.preventDefault();

    if (!text.trim()) return alert("Task cannot be empty");

    addTask(text);
    setText("");

  };

  return (

    <div className="w-[600px] h-[200px] flex justify-center items-center mx-auto p-5 bg-gray-800 rounded-3xl my-3">

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-[450px] p-4 rounded-2xl bg-gray-500 text-white"
        placeholder="Enter Your Task..."
      />

      <button
        onClick={handleAddTask}
        className="bg-green-600 text-white p-3 ml-4 rounded-2xl"
      >
        Add Task
      </button>
      
    </div>
  );
}

export default AddTasks;
