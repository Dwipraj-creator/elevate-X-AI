import React, { useState } from "react";
const initialTodos = [
  { id: 1, title: "Revise React basics", completed: false },
  { id: 2, title: "Practice useState", completed: false },
  { id: 3, title: "Understand useEffect", completed: false },
  { id: 4, title: "Revise useRef", completed: false },
];
export const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    const updatedTodos = todos.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          completed: !e.completed,
        };
      }
      return e;
    });
    setTodos(updatedTodos);
  };

  const completedTask = todos.filter((e) => !e.completed).length;

  return (
    <div>
      <h1>Render Todo</h1>
      <ul>
        {todos.map((e) => (
          <li
            key={e.id}
            style={{ textDecoration: e.completed ? "line-through" : "none" }}
          >
            {e.title}
            <button onClick={() => handleToggle(e.id)}>
              {e.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>

      <h3>
        Completed: {completedTask}/{todos.length}
      </h3>
    </div>
  );
};
