import { FormEvent } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Todo } from "types/Todo";
import { ReactComponent as DeleteIcon } from "img/icon-cross.svg";
import { ReactComponent as CheckIcon } from "img/icon-check.svg";

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
          <CheckboxContainer>
            <input
              id={id}
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={todo.wasCompleted}
            />
            <div className="control">
              <CheckIcon />
            </div>
          </CheckboxContainer>

          <Label htmlFor={id} wasCompleted={todo.wasCompleted}>
            {todo.text}
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
  padding: 0.96875rem 1.25rem;
  display: flex;
  align-items: center;
`;

type LabelProps = {
  wasCompleted: boolean;
};

const Label = styled.label<LabelProps>`
  text-decoration: ${(props) => (props.wasCompleted ? "line-through" : "none")};
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: none;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 0.8125rem;
  height: 0.8125rem;
`;

const CheckboxContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  top: -0.0625rem;
  display: inline-grid;
  grid-template-areas: "checkbox";

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .control {
    border-radius: 50%;
    border: 1px solid #e4e5f1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-property: border;
    transition-duration: 0.3s;

    svg {
      opacity: 0;
      pointer-events: none;
      transition: 0.3s opacity;
    }

    ::before {
      opacity: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      background: linear-gradient(
        to left top,
        hsl(280, 87%, 65%),
        hsl(192, 100%, 67%)
      );
      transition: 0.3s opacity;
    }
  }

  input:checked + .control {
    border: 0;

    svg {
      opacity: 1;
    }
  }

  input:checked + .control::before {
    opacity: 1;
  }
`;
