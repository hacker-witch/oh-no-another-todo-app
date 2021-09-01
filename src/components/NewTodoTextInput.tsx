import { FormEvent } from "react";
import { Input } from "components/Input";

type NewTodoTextInputProps = {
  newTodoText: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
};

export const NewTodoTextInput = ({
  newTodoText,
  onChange,
}: NewTodoTextInputProps) => (
  <Input
    type="text"
    name="addTodo"
    aria-label="Write a new todo item"
    value={newTodoText}
    onChange={onChange}
    placeholder="Create a new todo..."
  />
);
