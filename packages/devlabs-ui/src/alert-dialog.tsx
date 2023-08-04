'use client';

import { cva, VariantProps } from 'class-variance-authority';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useContext,
} from 'react';
import { twMerge } from 'tailwind-merge';
import {
  AlertDialogContent as AlertDialogPrimitiveContent,
  AlertDialogContext,
  AlertDialogOverlay as AlertDialogPrimitiveOverlay,
  AlertDialogPortal,
} from './core/alert-dialog';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/alert-dialog';

/* -----------------------------------------------------------------------------
 * Component: AlertDialogOverlay
 * -------------------------------------------------------------------------- */

export const alertDialogOverlayVariants = cva('p-4 sm:p-10', {
  variants: {
    scrollable: {
      true: 'flex items-center justify-center',
      false: 'grid place-items-center overflow-auto',
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

export type AlertDialogOverlayProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitiveOverlay
> &
  Omit<VariantProps<typeof alertDialogOverlayVariants>, 'scrollable'>;

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitiveOverlay>,
  AlertDialogOverlayProps
>(({ className, ...props }, forwardedRef) => {
  const { scrollable } = useContext(AlertDialogContext);

  return (
    <AlertDialogPrimitiveOverlay
      ref={forwardedRef}
      className={twMerge(alertDialogOverlayVariants({ className, scrollable }))}
      {...props}
    />
  );
});

AlertDialogOverlay.displayName = AlertDialogPrimitiveOverlay.displayName;

/* -----------------------------------------------------------------------------
 * Component: AlertDialogContent
 * -------------------------------------------------------------------------- */
export const alertDialogContentVariants = cva('', {
  variants: {
    scrollable: {
      true: 'flex max-h-full flex-col',
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

export type AlertDialogContentProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitiveContent
> &
  Omit<VariantProps<typeof alertDialogContentVariants>, 'scrollable'>;

export const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitiveContent>,
  AlertDialogContentProps
>((props, forwardedRef) => {
  const { scrollable } = useContext(AlertDialogContext);

  return (
    <AlertDialogPortal>
      <AlertDialogOverlay>
        <AlertDialogPrimitiveContent
          ref={forwardedRef}
          className={twMerge(alertDialogContentVariants({ scrollable }))}
          {...props}
        />
      </AlertDialogOverlay>
    </AlertDialogPortal>
  );
});

AlertDialogContent.displayName = AlertDialogPrimitiveContent.displayName;
