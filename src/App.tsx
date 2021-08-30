import { FormEvent, useState } from "react";
import { TodoList } from "components/TodoList";

export const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = e.currentTarget.addTodo.value;
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addTodo"
          aria-label="Write a new todo item"
          placeholder="Create a new todo..."
        />
      </form>
      <TodoList todos={todos} />
    </div>
  );
};
