import { TodoItem } from "components/TodoItem";
import { Todo } from "types/Todo";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (index: number) => void;
};

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo} />
    ))}
  </ul>
);
