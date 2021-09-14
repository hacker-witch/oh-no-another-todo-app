import { useRef } from "react";
import styled from "styled-components";
import {
  AlertDialogOverlay,
  AlertDialogLabel,
  AlertDialogDescription,
  AlertDialogContent,
} from "@reach/alert-dialog";
import { Container } from "components/Container";
import { Button as BaseButton } from "components/Button";

type ErrorAlertDialogProps = {
  message: string;
  close: () => void;
};

export const ErrorAlertDialog = ({ message, close }: ErrorAlertDialogProps) => {
  const closeButtonRef = useRef(null);

  return (
    <AlertDialogOverlay leastDestructiveRef={closeButtonRef}>
      <Container>
        <Contents>
          <Label>Error!</Label>

          <Description>{message}</Description>

          <Button ref={closeButtonRef}>Close</Button>
        </Contents>
      </Container>
    </AlertDialogOverlay>
  );
};

const Contents = styled(AlertDialogContent)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Label = styled(AlertDialogLabel)`
  font-size: 1.5rem;
  color: #dc2626;
`;

const Description = styled(AlertDialogDescription)`
  margin-top: 0.25rem;
`;

const Button = styled(BaseButton)`
  margin-top: 0.75rem;
  font-size: 1rem;
`;
