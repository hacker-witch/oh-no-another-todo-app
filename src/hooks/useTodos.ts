import { useEffect, useState } from "react";
import localforage from "localforage";
import { Todo } from "types/Todo";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    localforage.getItem("todos").then((todos) => {
      if (!todos) {
        return;
      }

      setTodos(todos as Todo[]);
    });
  }, []);

  const updateTodos = async (newTodos: Todo[]) => {
    try {
      await localforage.setItem("todos", newTodos);
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (todo: Todo) => {
    const newTodos = [...todos, { ...todo }];
    updateTodos(newTodos);
  };

  const toggleTodo = async (index: number) => {
    const newTodos = todos.map((todo, currentIndex) => {
      if (currentIndex === index) {
        return { ...todo, wasCompleted: !todo.wasCompleted };
      }

      return todo;
    });

    updateTodos(newTodos);
  };

  const deleteTodo = async (index: number) => {
    const newTodos = todos.filter(
      (todo, currentIndex) => currentIndex !== index
    );

    updateTodos(newTodos);
  };

  const moveTodo = async (oldIndex: number, newIndex: number) => {
    const todosCopy = todos.slice();
    const deletedItems = todosCopy.splice(oldIndex, 1);
    const todoToBeMoved = deletedItems[0];
    todosCopy.splice(newIndex, 0, todoToBeMoved);

    updateTodos(todosCopy);
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    moveTodo,
  };
};
