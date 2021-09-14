import { useRef } from "react";
import styled from "styled-components";
import {
  AlertDialogOverlay,
  AlertDialogLabel,
  AlertDialogDescription,
  AlertDialogContent,
} from "@reach/alert-dialog";
import { Container } from "components/Container";
import { Button } from "components/Button";

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

          <AlertDialogDescription>{message}</AlertDialogDescription>

          <Button ref={closeButtonRef}>Close</Button>
        </Contents>
      </Container>
    </AlertDialogOverlay>
  );
};

const Contents = styled(AlertDialogContent)`
  width: 100%;
`;

const Label = styled(AlertDialogLabel)`
  text-align: center;
  font-size: 1.5rem;
  color: #dc2626;
`;
