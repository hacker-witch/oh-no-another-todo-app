import { Todo } from "types/Todo";

type TodoItemProps = {
  todo: Todo;
  index: number;
};

export const TodoItem = ({ todo, index }: TodoItemProps) => (
  <li>
    <input id={`todo-${index}`} type="checkbox" />
    <label htmlFor={`todo-${index}`}>{todo.text}</label>
  </li>
);
