type TodoListProps = {
  todos: string[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo}</li>
    ))}
  </ul>
);
