import create from "zustand";
import { todoType } from "../types/todo";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      addTodo: (todo: todoType) =>
        set((state: any) => ({
          todos: [...state.todos, todo],
        })),
      deleteTodo: (todoId: string) =>
        set((state: any) => ({
          todos: state.todos.filter((todo: todoType) => todo.id !== todoId),
        })),
      completeTodo: (todoId: string) =>
        set((state: any) => ({
          todos: state.todos.map((todo: todoType) => {
            if (todo.id === todoId) {
              return {
                ...todo,
                isDone: true,
              };
            }
            return todo;
          }),
        })),
    }),
    {
      name: "todo-storage", // Nom de la clé dans le storage
      getStorage: () => localStorage, // Choisir le type de storage, localStorage par défaut
    }
  )
);
