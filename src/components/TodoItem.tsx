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
  justify-content: space-between;
`;

type LabelProps = {
  wasCompleted: boolean;
};

const Label = styled.label<LabelProps>`
  flex: 1;
  position: relative;
  margin: 0 0.75rem;
  color: ${(props) => (props.wasCompleted ? "#D2D3DB" : "inherit")};

  ::before {
    content: "";
    width: 100%;
    position: absolute;
    top: 50%;
    border-color: ${(props) =>
      props.wasCompleted ? "#b8bac6" : "transparent"};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  border: 0;
  background: none;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  width: 0.8125rem;
  height: 0.8125rem;
`;
