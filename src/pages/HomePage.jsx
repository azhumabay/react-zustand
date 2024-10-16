import { TodoForm, TodoList } from "../components";
import { useTodoStore } from "../store/useTodoStore";

export default function HomePage() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
}
