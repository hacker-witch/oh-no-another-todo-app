import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";

type ErrorAlertDialogProps = {
  message: string;
  close: () => void;
};

export const ErrorAlertDialog = ({ message, close }: ErrorAlertDialogProps) => {
  const closeButtonRef = useRef(null);

  return (
    <AlertDialog leastDestructiveRef={closeButtonRef}>
      <button aria-label="close" ref={closeButtonRef}>
        x
      </button>
      <AlertDialogLabel>Error!</AlertDialogLabel>
      <AlertDialogDescription>{message}</AlertDialogDescription>
    </AlertDialog>
  );
};
