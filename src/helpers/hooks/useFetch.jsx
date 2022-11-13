import { useState } from "react";


const useFetch = (list, url) => {
  const [todos, setTodos] = useState(list);
  const addItem = async (newItem) => {
    try {
       await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });
    } catch (error) {
      console.error(error);
    }
    getFetchTodo();
  };

  const getFetchTodo = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const loding = [];

      for (const key in data) {
        loding.push({
          id: key,
          text: data[key].text,
        });
      }
      setTodos(loding);
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemHandler = async (todoId) => {
    try {
      await fetch(
        `https://todohooks-2715c-default-rtdb.asia-southeast1.firebasedatabase.app/todo/${todoId}.json`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.error(error);
    }
    getFetchTodo();
  };
  return {
    todos,
    addItem,
    getFetchTodo,
    removeItemHandler,
  };
};

export default useFetch;
