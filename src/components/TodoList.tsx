import { TodoItem } from "components/TodoItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import styled from "styled-components";
import { Todo } from "types/Todo";

export { StyledTodoList as TodoList };

type TodoListProps = {
  className?: string;
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
  moveTodo: (oldIndex: number, newIndex: number) => void;
};

const TodoList = ({
  className,
  todos,
  toggleTodo,
  deleteTodo,
  moveTodo,
}: TodoListProps) => {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    const destinationItemIsEqualToSourceItem =
      destination.droppableId === source.droppableId &&
      destination.index === source.index;

    if (destinationItemIsEqualToSourceItem) {
      return;
    }

    moveTodo(source.index, destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="todo-list">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={className}
          >
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
    </DragDropContext>
  );
};

const StyledTodoList = styled(TodoList)`
  list-style-type: none;
  padding: 0;
  font-size: 0.728125rem;
  color: #484b6a;
  box-shadow: 0 0.3125rem 25px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  background: #fff;
`;
