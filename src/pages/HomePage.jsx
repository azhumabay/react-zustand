import { Button } from "react-bootstrap";
import { useTodoStore } from "../store/useTodoStore";
import { useState } from "react";
import TodoList from "../components/TodoList";

export default function HomePage() {
  const [input, setInput] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTask = useTodoStore((state) => state.addTask);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleStatus = useTodoStore((state) => state.toggleStatus);

  const addTaskHandler = () => {
    if (input.trim() === "") {
      return;
    }
    addTask(input);
    setInput("");
  };

  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <input
          value={input}
          className="w-50"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={addTaskHandler}>Добавить задачу</Button>
      </div>

      <TodoList todos={todos} />
    </>
  );
}
