import { FormEvent } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Todo } from "types/Todo";
import { Checkbox } from "components/Checkbox";
import { ReactComponent as DeleteIcon } from "img/icon-cross.svg";

export { StyledTodoItem as TodoItem };

type TodoItemProps = {
  className?: string;
  todo: Todo;
  index: number;
  toggleTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
};

const TodoItem = ({
  className,
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
          className={className}
        >
          <Checkbox
            id={id}
            isChecked={todo.wasCompleted}
            onChange={handleCheckboxChange}
          />

          <Label htmlFor={id} wasCompleted={todo.wasCompleted}>
            <LabelText wasCompleted={todo.wasCompleted}>{todo.text}</LabelText>
          </Label>

          <DeleteButton
            type="button"
            aria-label="Delete this todo"
            onClick={handleDelete}
          >
            <StyledDeleteIcon />
          </DeleteButton>
        </li>
      )}
    </Draggable>
  );
};

const StyledTodoItem = styled(TodoItem)`
  padding: 0.96875rem 1rem 0.96875rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type LabelProps = {
  wasCompleted: boolean;
};

const Label = styled.label<LabelProps>`
  flex: 1;
  margin: 0 0.75rem;
  color: ${(props) => (props.wasCompleted ? "#D2D3DB" : "inherit")};
`;

type LabelTextProps = {
  wasCompleted: boolean;
};

const LabelText = styled.span<LabelTextProps>`
  position: relative;

  &::before {
    content: "";
    transform: ${(props) => (props.wasCompleted ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: left;
    transition: 0.3s transform;
    width: 100%;
    position: absolute;
    top: 50%;
    border-bottom: 1px solid #b8bac6;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border: 0;
  background: none;
  border-radius: 4px;
  transition-duration: 0.3s;
  transition-property: box-shadow;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 0.8125rem;
  height: 0.8125rem;
`;
