import { useCallback, useState } from "react";
import Todos from "./Todos";
const Component5 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  // Todos component re-renders even when the todos do not change: "referential equality"
  // Every time a component re-renders, its functions get recreated. Because of this, the addTodo
  // function has actually changed.

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

  // Fix?? -> useCallback hook to prevent the function from being recreated unless necessary
  const addTodo = useCallback(() => {
    setTodos(t => [...t, "New Todo"]);
  }, [todos])


  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default Component5;
