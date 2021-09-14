import { FormEvent } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Todo } from "types/Todo";
import { Checkbox } from "components/Checkbox";
import { Button } from "components/Button";
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

  const id = `todo-${todo.id}`;

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

          <Button
            type="button"
            aria-label="Delete this todo"
            onClick={handleDelete}
          >
            <StyledDeleteIcon />
          </Button>
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
  transition: 0.3s box-shadow;

  &:focus-visible {
    outline: none;
    box-shadow: inset 0 0 0 2px hsl(220, 98%, 61%);
  }
`;

type LabelProps = {
  wasCompleted: boolean;
};

const Label = styled.label<LabelProps>`
  flex: 1;
  margin: 0 0.5rem 0 0.75rem;
  color: ${(props) => (props.wasCompleted ? "#D2D3DB" : "inherit")};
`;

type LabelTextProps = {
  wasCompleted: boolean;
};

const LabelText = styled.span<LabelTextProps>`
  background-image: linear-gradient(#b8bac6, #b8bac6);
  background-position: 0% 50%;
  background-repeat: no-repeat;
  background-size: ${(props) => (props.wasCompleted ? "100% 1px" : "0% 1px")};
  transition: 0.3s background-size;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 0.8125rem;
  height: 0.8125rem;
`;
