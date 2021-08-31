import { FormEvent, useState } from "react";
import localforage from "localforage";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    const newTodos = [...todos, { text: newTodoText, wasCompleted: false }];
    setTodos(newTodos);
    localforage.setItem("todos", newTodos);
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
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};
