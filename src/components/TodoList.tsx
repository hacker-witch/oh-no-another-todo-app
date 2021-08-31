import { TodoItem } from "components/TodoItem";
import { forwardRef } from "react";
import { Todo } from "types/Todo";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList = forwardRef<HTMLUListElement, TodoListProps>(
  ({ todos, toggleTodo, deleteTodo }: TodoListProps, ref) => (
    <ul ref={ref}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
);
