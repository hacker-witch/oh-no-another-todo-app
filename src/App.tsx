import { TodoList } from "components/TodoList";

export const App = () => (
  <div>
    <h1>Todo</h1>
    <form>
      <input
        type="text"
        aria-label="Write a new todo item"
        placeholder="Create a new todo..."
      />
    </form>
    <TodoList todos={[]} />
  </div>
);
