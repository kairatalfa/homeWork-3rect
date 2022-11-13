import { useEffect, useState } from "react";

import "./App.css";
import useFetch from "./helpers/hooks/useFetch";

function App() {
  const [todo, setTodo] = useState("");
  const BASE_URL =
    "https://todohooks-2715c-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json";
  const { todos, addItem, getFetchTodo, removeItemHandler } = useFetch(
    [],
    BASE_URL
  );

  const addTodoHandler = (e) => {
    e.preventDefault();
    addItem({ text: todo });
    setTodo("");
  };
  useEffect(() => {
    getFetchTodo();
  }, []);

  return (
    <div className="App">
      <form onSubmit={addTodoHandler}>
        <input
          value={todo}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>add todo</button>
      </form>
      <div>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={()=> removeItemHandler(item.id)}>delete</button>
            </li>
          );
        })}
      </div>
      
    </div>
  );
}

export default App;
