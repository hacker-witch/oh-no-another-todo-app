import { FormEvent } from "react";
import { Todo } from "types/Todo";

type TodoItemProps = {
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoItem = ({
  todo,
  index,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) => {
  const handleCheckboxChange = (e: FormEvent<HTMLInputElement>) => {
    toggleTodo(index);
  };

  const handleDelete = () => {
    deleteTodo(index);
  };

  return (
    <li>
      <input
        id={`todo-${index}`}
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={todo.wasCompleted}
      />
      <label htmlFor={`todo-${index}`}>{todo.text}</label>
      <button
        type="button"
        aria-label="Delete this todo"
        onClick={handleDelete}
      >
        &times;
      </button>
    </li>
  );
};
