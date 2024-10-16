import { TodoList } from "../components";
import { useTodoStore } from "../store/useTodoStore";

export default function IncompletePage() {
  const todos = useTodoStore((state) => state.todos);

  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  return <TodoList todos={incompleteTodos} />;
}
