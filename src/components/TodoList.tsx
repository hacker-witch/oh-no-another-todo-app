import { TodoItem } from "components/TodoItem";
import { Todo } from "types/Todo";

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} index={index} />
    ))}
  </ul>
);
