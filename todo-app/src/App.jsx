import { useState } from "react";


const App = () => {

    const [todo,setTodo]=useState([]);
    const [input,setInput]=useState("");
    const addTask=()=>{
      if(input.trim()){
        setTodo([...todo,{id:Date.now(),text:input,completed:false}]);
        setInput("");
      }
    }
  return (
    <div className="bg-blue-400 h-screen flex justify-center items-center font-sans">
      <div className="bg-white rounded-2xl p-6 w-100 min-h-60">
        <h1 className="font-bold text-3xl m-3 text-center">REACT TODO APP</h1>
        <div className="border border-gray-400 rounded-2xl m-3 flex justify-between">
          <input
          value={input}
            placeholder="Add a new todo"
            className="outline-none p-2"
            onChange={(e)=>setInput(e.target.value)}
          ></input>
          <button className="bg-blue-600 p-2 rounded-2xl cursor-pointer w-18" onClick={addTask}>
            ADD
          </button>

        </div>
        <ul>
           {
            todo.map((td)=>(
              <li key={td.id}
              className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200"
              >
                <input type="checkbox"
                checked={td.completed}
                onChange={()=>setTodo(
                  todo.map((t)=>(
                    t.id===td.id ? {...t,completed:!t.completed}:t
                  ))
                )}
                className="mr-2 h-5 w-5 text-blue-600"
                />
                <span className={`flex-1 ${td.completed ? "line-through text-gray-500" : "text-gray-800"}`}>{td.text}</span>
                <button
                onClick={()=>setTodo(
                  todo.filter((t)=> t.id !==td.id)
                )}
                className="ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                >Delete</button>
              </li>
            ))
           }
        </ul>
        
      </div>
    </div>
  );
};
export default App;
