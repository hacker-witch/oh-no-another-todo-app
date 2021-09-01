import styled, { css } from "styled-components";

const placeholderStyles = css`
  color: #9394a5;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.25rem 0.75rem;
  font-family: inherit;
  border: none;
  border-radius: 5px;

  :focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
  }

  ::-webkit-input-placeholder {
    ${placeholderStyles}
  }

  ::-moz-placeholder {
    ${placeholderStyles}
  }

  :-ms-input-placeholder {
    ${placeholderStyles}
  }
  :-moz-placeholder {
    ${placeholderStyles}
  }
`;
