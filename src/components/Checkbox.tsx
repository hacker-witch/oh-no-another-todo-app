import { FormEventHandler } from "react";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "img/icon-check.svg";

export { StyledCheckbox as Checkbox };

type CheckboxProps = {
  className?: string;
  id: string;
  isChecked: boolean;
  onChange: FormEventHandler<HTMLInputElement>;
};

const Checkbox = ({ className, id, isChecked, onChange }: CheckboxProps) => (
  <div className={className}>
    <Input id={id} type="checkbox" onChange={onChange} checked={isChecked} />
    <Control>
      <StyledCheckIcon />
    </Control>
  </div>
);

const StyledCheckbox = styled(Checkbox)`
  z-index: 0;
  width: 1.25rem;
  height: 1.25rem;
  position: relative;
  top: -0.0625rem;
  display: inline-grid;
  grid-template-areas: "checkbox";

  > * {
    grid-area: checkbox;
  }
`;

const Input = styled.input`
  opacity: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  border: 1px solid #e4e5f1;
  transition: 0.3s border;

  &::before,
  &::after {
    transform: scale(0);
    opacity: 0;
    pointer-events: none;
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
    transition-duration: 0.3s;
    transition-property: opacity, transform;
  }

  &::after {
    z-index: -1;
  }

  ${Input}:checked + & {
    border: 0;
  }

  ${Input}:checked + &::before {
    opacity: 1;
    transform: scale(1);
  }

  ${Input}:focus + &:after {
    opacity: 0.5;
    transform: scale(1.3);
  }
`;

const StyledCheckIcon = styled(CheckIcon)`
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  z-index: 1;
  transition-duration: 0.3s;
  transition-property: opacity, transform;

  ${Input}:checked + ${Control} & {
    opacity: 1;
    transform: scale(1);
  }
`;
