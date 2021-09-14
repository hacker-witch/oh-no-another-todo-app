import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";
import { Button } from "components/Button";

type ErrorAlertDialogProps = {
  message: string;
  close: () => void;
};

export const ErrorAlertDialog = ({ message, close }: ErrorAlertDialogProps) => {
  const closeButtonRef = useRef(null);

  return (
    <AlertDialog leastDestructiveRef={closeButtonRef}>
      <Button aria-label="close" ref={closeButtonRef}>
        x
      </Button>
      <AlertDialogLabel>Error!</AlertDialogLabel>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
};
