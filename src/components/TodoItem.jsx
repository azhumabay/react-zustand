import { Button, Form, ListGroup } from "react-bootstrap";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoItem({ id, title, completed }) {
  const toggleStatus = useTodoStore((state) => state.toggleStatus);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <>
      <ListGroup.Item
        className={`d-flex align-items-center justify-content-between ${
          completed && "border-primary"
        }`}
      >
        <Form.Check
          className={`fs-5 d-flex align-items-center gap-4 ${
            completed && "text-decoration-line-through"
          }`}
          aria-label="option 1"
          label={title}
          checked={completed}
          onChange={() => toggleStatus(id)}
        />

        <Button onClick={() => deleteTodo(id)}>удалить</Button>
      </ListGroup.Item>
    </>
  );
}
