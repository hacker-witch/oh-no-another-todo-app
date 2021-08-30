import { FormEvent } from "react";
import { Todo } from "types/Todo";

type TodoItemProps = {
  todo: Todo;
  index: number;
};

export const TodoItem = ({ todo, index }: TodoItemProps) => {
  const handleCheckboxChange = (e: FormEvent<HTMLInputElement>) => {};

  return (
    <li>
      <input
        id={`todo-${index}`}
        type="checkbox"
        onChange={handleCheckboxChange}
        checked={todo.wasCompleted}
      />
      <label htmlFor={`todo-${index}`}>{todo.text}</label>
    </li>
  );
};
