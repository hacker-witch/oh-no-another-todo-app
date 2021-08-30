import { FormEvent } from "react";
import { TodoList } from "components/TodoList";

export const App = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Write a new todo item"
          placeholder="Create a new todo..."
        />
      </form>
      <TodoList todos={[]} />
    </div>
  );
};
