import ListGroup from "react-bootstrap/ListGroup";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <>
      <ListGroup >
        {todos.map(({ id, title, completed }) => (
          <TodoItem key={id} id={id} title={title} completed={completed} />
        ))}
      </ListGroup>
    </>
  );
}
