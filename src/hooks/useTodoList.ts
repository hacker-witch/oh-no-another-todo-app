import { useEffect, useState } from "react";
import localforage from "localforage";
import { Todo } from "types/Todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    localforage.getItem("todos").then((todoList) => {
      if (!todoList) {
        return;
      }

      setTodoList(todoList as Todo[]);
    });
  }, []);

  const updateTodoList = async (newTodoList: Todo[]) => {
    try {
      await localforage.setItem("todos", newTodoList);
      setTodoList(newTodoList);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (todo: Todo) => {
    const newTodoList = [...todoList, { ...todo }];
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
    const todoListCopy = todoList.slice();
    const deletedItems = todoListCopy.splice(oldIndex, 1);
    const todoToBeMoved = deletedItems[0];
    todoListCopy.splice(newIndex, 0, todoToBeMoved);

    updateTodoList(todoListCopy);
  };

  return {
    todoList,
    addTodo,
    toggleTodo,
    deleteTodo,
    moveTodo,
  };
};
