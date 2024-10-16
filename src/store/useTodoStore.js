import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist((set) => ({
    todos: [],

    addTask: (title) =>
      set((state) => ({
        todos: [...state.todos, { id: Date.now(), title, completed: false }],
      })),

    toggleStatus: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      })),

    deleteTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),
  }))
);

export { useTodoStore };
