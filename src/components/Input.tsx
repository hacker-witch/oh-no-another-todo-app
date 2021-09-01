import styled, { css } from "styled-components";

const placeholderStyles = css`
  color: #9394a5;
`;

export const Input = styled.input`
  width: 100%;
  font-family: inherit;
  border: none;
  border-radius: 5px;

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
