// import { useState } from "react";
// import MainContext from "./MainContext";
// const TodoContext = (props) =>{
//     const [todos, setTodos] = useState([])
//     const addTodo = (text)=>{
//         setTodos((prev)=>[
//             ...prev, {id : Date.now(), text, completed:false}
//         ])
//     };

//     const deleteTodo = (id)=>{
//         setTodos((prev)=> prev.filter((t)=> t.id !== id))
//     }

//     const toggleComplete = (id) =>{
//         setTodos((prev)=> prev.map((t)=> t.id === id ? {...t, completed : !t.completed} : t))
//     }

//     const updateTodo = (id,newText) =>{
//         setTodos((prev) => prev.map((t)=>(
//             t.id === id ? {...t, text : newText} : t
//         )))
//     }

//     return(
//         <MainContext.Provider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
//             {props.children}
//         </MainContext.Provider>
//     )
// }
// export default TodoContext














