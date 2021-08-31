import { FormEvent } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
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

  const id = `todo-${index}`;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <input
            id={id}
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={todo.wasCompleted}
          />
          <Label htmlFor={id} wasCompleted={todo.wasCompleted}>
            {todo.text}
          </Label>
          <button
            type="button"
            aria-label="Delete this todo"
            onClick={handleDelete}
          >
            &times;
          </button>
        </li>
      )}
    </Draggable>
  );
};

type LabelProps = {
  wasCompleted: boolean;
};

const Label = styled.label<LabelProps>`
  text-decoration: ${(props) => (props.wasCompleted ? "line-through" : "none")};
`;
