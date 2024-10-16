import { TodoList } from "../components";
import { useTodoStore } from "../store/useTodoStore";

export default function CompletedPage() {
  const todos = useTodoStore((state) => state.todos);

  const completedTodos = todos.filter((todo) => todo.completed === true);

  return <TodoList todos={completedTodos} />;
}
