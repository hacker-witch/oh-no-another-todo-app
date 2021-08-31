import { FormEvent, useState, useEffect } from "react";
import localforage from "localforage";
import { DragDropContext } from "react-beautiful-dnd";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    localforage.getItem("todos").then((todos) => {
      if (!todos) {
        return;
      }

      setTodos(todos as Todo[]);
    });
  }, []);

  useEffect(() => {
    localforage.setItem("todos", todos);
  }, [todos]);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, { text: newTodoText, wasCompleted: false }];
    setTodos(newTodos);
  };

  const toggleTodo = (index: number) => {
    const newTodoList = todos.map((todo, currentIndex) => {
      if (currentIndex === index) {
        return { ...todo, wasCompleted: !todo.wasCompleted };
      }

      return todo;
    });

    setTodos(newTodoList);
  };

  const deleteTodo = (index: number) => {
    const newTodoList = todos.filter(
      (todo, currentIndex) => currentIndex !== index
    );

    setTodos(newTodoList);
  };

  const handleNewTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setNewTodoText(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo({ text: newTodoText, wasCompleted: false });
    setNewTodoText("");
  };

  const handleDragEnd = () => {};

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addTodo"
          aria-label="Write a new todo item"
          value={newTodoText}
          onChange={handleNewTodoTextChange}
          placeholder="Create a new todo..."
        />
      </form>
      <DragDropContext onDragEnd={handleDragEnd}>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </DragDropContext>
    </div>
  );
};
