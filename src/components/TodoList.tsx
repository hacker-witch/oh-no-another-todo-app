import { TodoItem } from "components/TodoItem";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "types/Todo";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => (
  <Droppable droppableId="todo-list">
    {(provided) => (
      <ul {...provided.droppableProps} ref={provided.innerRef}>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        {provided.placeholder}
      </ul>
    )}
  </Droppable>
);
