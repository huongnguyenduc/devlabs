import { FC, HTMLAttributes } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogProps,
  DialogTitle,
} from '@devlabs/ui/src/dialog';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Modal
 * ------------------------------------------------------------------------------------------------------------------ */

type ModalVariantProps = DialogProps & {
  title: string;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
};

export type ModalProps = ModalVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof ModalVariantProps>;

export const Modal: FC<ModalProps> = ({
  children,
  title,
  description,
  onClose,
  isOpen,
  ...props
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onChange} {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};
