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
    <input id={id} type="checkbox" onChange={onChange} checked={isChecked} />
    <div className="control">
      <CheckIcon />
    </div>
  </div>
);

const StyledCheckbox = styled(Checkbox)`
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
      transform: scale(0);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      transition-duration: 0.3s;
      transition-property: opacity, transform;
    }

    ::before {
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
  }

  input:checked + .control {
    border: 0;

    svg {
      opacity: 1;
      transform: scale(1);
    }
  }

  input:checked + .control::before {
    opacity: 1;
    transform: scale(1);
  }
`;
