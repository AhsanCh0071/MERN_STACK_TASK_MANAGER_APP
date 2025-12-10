import { useState, useEffect } from "react";
import axios from "axios";
import MainContext from "./MainContext";

const TodayContext = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const API = "http://localhost:3000/api/tasks";

  // Load tasks on mount
  useEffect(() => {

    fetchTasks();

  }, []);


  //Fetch Tasks
  const fetchTasks = async () => {

    try {

      const res = await axios.get(API);
      setTasks(res.data);

    } catch (error) {

      console.log("Error fetching tasks", error);

    }
  };


  //ADD TASK
  const addTask = async (text) => {

    try {

      const res = await axios.post(API, { text });
      setTasks((prev) => [...prev, res.data]);

    } catch (error) {

      console.log("Error adding task", error);

    }
  };


  //DELETE TASKS
  const deleteTask = async (id) => {

    try {

      await axios.delete(`${API}/${id}`);
      setTasks((prev) => prev.filter((t) => t._id !== id));

    } catch (error) {

      console.log("Error deleting task", error);

    }
  };


  //UPDATE TASKS
  const updateTasks = async (id, newText) => {

    try {

      const res = await axios.put(`${API}/${id}`, { text: newText });
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));

    } catch (error) {

      console.log("Error updating task", error);

    }
  };


  //TOGGLE_COMPLETE
  const toggleComplete = async (id) => {

    try {

      const res = await axios.patch(`${API}/${id}`);
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));

    } catch (error) {

      console.log("Error toggling task", error);

    }
  };


  //CONTEXT PROVIDER
  return (
    <MainContext.Provider
      value={{ tasks, addTask, deleteTask, updateTasks, toggleComplete }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default TodayContext;
