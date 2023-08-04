'use client';

import { cx } from 'class-variance-authority';
import { ComponentPropsWithoutRef, FC } from 'react';
import {
  Toast,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './core/toast';
import { useToast } from './use-toast';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/toast';

/* -----------------------------------------------------------------------------
 * Component: Toaster
 * -------------------------------------------------------------------------- */

export type ToastViewportProps = ComponentPropsWithoutRef<typeof ToastViewport>;

export type ToasterProps = ComponentPropsWithoutRef<typeof ToastProvider> &
  Pick<ToastViewportProps, 'position' | 'size'>;

export const Toaster: FC<ToasterProps> = ({
  position,
  size = 'auto',
  ...props
}) => {
  const { toasts } = useToast();

  return (
    <ToastProvider {...props}>
      {toasts.map(({ id, title, description, action, className, ...rest }) => (
        <Toast
          key={id}
          {...rest}
          className={cx('flex items-center justify-between gap-4', className)}
        >
          <div className="flex flex-col gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}

            {description && <ToastDescription>{description}</ToastDescription>}
          </div>

          {action}
        </Toast>
      ))}

      <ToastViewport position={position} size={size} />
    </ToastProvider>
  );
};
