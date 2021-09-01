import { FormEvent } from "react";
import styled from "styled-components";
import { Input } from "components/Input";

export { StyledNewTodoTextInput as NewTodoTextInput };

type NewTodoTextInputProps = {
  className?: string;
  newTodoText: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
};

const NewTodoTextInput = ({
  className,
  newTodoText,
  onChange,
}: NewTodoTextInputProps) => (
  <div className={className}>
    <Checkbox />
    <Input
      type="text"
      name="addTodo"
      aria-label="Write a new todo item"
      value={newTodoText}
      onChange={onChange}
      placeholder="Create a new todo..."
    />
  </div>
);

const StyledNewTodoTextInput = styled(NewTodoTextInput)`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;
`;

const Checkbox = styled.div`
  flex-shrink: 0;
  position: relative;
  top: -0.1rem;
  margin-left: 1.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid #e4e5f1;
`;
