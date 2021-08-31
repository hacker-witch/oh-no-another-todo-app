import { TodoItem } from "components/TodoItem";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Todo } from "types/Todo";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

export const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const destinationItemIsEqualToSourceItem =
      destination.droppableId === source.droppableId &&
      destination.index === source.index;

    if (destinationItemIsEqualToSourceItem) {
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
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
    </DragDropContext>
  );
};
