type ErrorAlertDialogProps = {
  message: string;
};

export const ErrorAlertDialog = ({ message }: ErrorAlertDialogProps) => (
  <span>{message}</span>
);
