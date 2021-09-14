import { FormEvent } from "react";
import styled from "styled-components";
import { Input } from "components/Input";
import { Checkbox } from "components/Checkbox";

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
    <DecorativeCheckbox />
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
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 5px;

  ${Input} {
    padding-left: 3.25rem;
  }
`;

const DecorativeCheckbox = styled(Checkbox).attrs(() => ({
  isDisabled: true,
  isChecked: false,
  id: "new-todo-text-input-decorative-checkbox",
}))`
  flex-shrink: 0;
  position: absolute;
  top: 29%;
  margin-left: 1.25rem;
`;
