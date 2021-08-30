import { FormEvent, useState } from "react";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";

export const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTodoChange = (e: FormEvent<HTMLInputElement>) => {
    setNewTodo(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodo }]);
    setNewTodo("");
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="addTodo"
          aria-label="Write a new todo item"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Create a new todo..."
        />
      </form>
      <TodoList todos={todos} />
    </div>
  );
};
