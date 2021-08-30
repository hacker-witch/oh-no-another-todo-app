import { TodoItem } from "components/TodoItem";

type TodoListProps = {
  todos: string[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} />
    ))}
  </ul>
);
