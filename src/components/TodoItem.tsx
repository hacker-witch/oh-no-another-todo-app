type TodoItemProps = {
  todo: string;
  index: number;
};

export const TodoItem = ({ todo, index }: TodoItemProps) => (
  <li>
    <input id={`todo-${index}`} type="checkbox" />
    <label htmlFor={`todo-${index}`}>{todo}</label>
  </li>
);
