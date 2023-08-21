import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@devlabs/ui/src/alert-dialog';
import { Button } from '@devlabs/ui/src/button';
import { ComponentProps, FC } from 'react';

/* -----------------------------------------------------------------------------
 * Component: AlertModal
 * -------------------------------------------------------------------------- */

export type AlertModalProps = ComponentProps<typeof AlertDialog> & {
  disabled: boolean;
  loading: boolean;
  onConfirm: () => void;
};

export const AlertModal: FC<AlertModalProps> = ({
  onConfirm,
  disabled,
  loading,
  ...props
}) => {
  return (
    <AlertDialog {...props}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogBody className="p-6">
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogBody>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={disabled}>Cancel</AlertDialogCancel>
          <Button loading={loading} variant="destructive" onClick={onConfirm}>
            Continue
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
