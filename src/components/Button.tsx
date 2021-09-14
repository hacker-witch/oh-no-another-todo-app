import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border: 0;
  background: none;
  border-radius: 4px;
  transition-duration: 0.3s;
  transition-property: box-shadow, background-color;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;
