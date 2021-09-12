import { useEffect, useState } from "react";
import localforage from "localforage";
import { Todo } from "types/Todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    localforage.getItem("todos").then((todoList) => {
      if (!todoList) {
        setIsLoading(false);
        return;
      }

      setTodoList(todoList as Todo[]);
      setIsLoading(false);
    });
  }, []);

  const updateTodoList = async (newTodoList: Todo[]) => {
    try {
      setIsLoading(true);
      await localforage.setItem("todos", newTodoList);
      setTodoList(newTodoList);
    } catch (error) {
      handleLocalDatabaseErrors(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocalDatabaseErrors = (error: Error) => {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    setError("An unexpected error has ocurred, please try again later.");
  };

  const addTodo = async (text: string) => {
    const newTodo = { text, wasCompleted: false, id: todoList.length };
    const newTodoList = [...todoList, newTodo];
    updateTodoList(newTodoList);
  };

  const toggleTodo = async (index: number) => {
    const newTodoList = todoList.map((todo, currentIndex) => {
      if (currentIndex === index) {
        return { ...todo, wasCompleted: !todo.wasCompleted };
      }

      return todo;
    });

    updateTodoList(newTodoList);
  };

  const deleteTodo = async (index: number) => {
    const newTodoList = todoList.filter(
      (todo, currentIndex) => currentIndex !== index
    );

    updateTodoList(newTodoList);
  };

  const moveTodo = async (oldIndex: number, newIndex: number) => {
    const previousTodoList = todoList.slice();
    const newTodoList = todoList.slice();
    const deletedItems = newTodoList.splice(oldIndex, 1);
    const todoToBeMoved = deletedItems[0];
    newTodoList.splice(newIndex, 0, todoToBeMoved);

    setTodoList(newTodoList);
    setIsLoading(true);

    try {
      await localforage.setItem("todos", newTodoList);
    } catch (error) {
      handleLocalDatabaseErrors(error as Error);
      setTodoList(previousTodoList);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    todoList,
    isLoading,
    error,
    addTodo,
    toggleTodo,
    deleteTodo,
    moveTodo,
  };
};
