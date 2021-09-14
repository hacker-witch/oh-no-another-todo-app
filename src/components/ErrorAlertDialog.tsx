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
          <Button aria-label="close" ref={closeButtonRef}>
            x
          </Button>

          <AlertDialogLabel>Error!</AlertDialogLabel>

          <AlertDialogDescription>{message}</AlertDialogDescription>
        </Contents>
      </Container>
    </AlertDialogOverlay>
  );
};

const Contents = styled(AlertDialogContent)`
  width: 100%;
`;
