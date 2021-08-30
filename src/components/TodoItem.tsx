type TodoItemProps = {
  todo: string;
};

export const TodoItem = ({ todo }: TodoItemProps) => <li>{todo}</li>;
