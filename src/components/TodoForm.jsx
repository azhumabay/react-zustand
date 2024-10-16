import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";
import { Button, Form } from "react-bootstrap";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const addTask = useTodoStore((state) => state.addTask);

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    addTask(input);
    setInput("");
  };

  return (
    <Form onSubmit={addTaskHandler} className="mb-5">
      <Form.Group className="mb-3 d-flex gap-4">
        <Form.Control
          type="text"
          placeholder="Какие у вас планы?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Добавить задачу</Button>
      </Form.Group>
    </Form>
  );
}

{
  /* <div className="d-flex gap-3 mb-4">
  <input
    value={input}
    className="w-50"
    onChange={(e) => setInput(e.target.value)}
  />
  <Button onClick={addTaskHandler}>Добавить задачу</Button>
</div>; */
}
