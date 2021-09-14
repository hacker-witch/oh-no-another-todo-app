import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  to { 
    transform: rotate(360deg); 
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border-top: 3px solid #fff;
  border-right: 3px solid transparent;
  animation: ${rotateAnimation} 0.6s linear infinite;
`;
