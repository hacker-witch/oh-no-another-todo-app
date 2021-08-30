import { FormEvent, useState } from "react";
import { TodoList } from "components/TodoList";
import { Todo } from "types/Todo";

export const App = () => {
  const [newTodoText, setNewTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleNewTodoTextChange = (e: FormEvent<HTMLInputElement>) => {
    setNewTodoText(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, { text: newTodoText, wasCompleted: false }]);
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
      <TodoList todos={todos} />
    </div>
  );
};
